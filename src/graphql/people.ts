import { extendType, objectType, nonNull, stringArg } from "nexus";
import fetch from "node-fetch";
import { NexusGenObjects } from "../../generated/nexus";
import { baseURL } from "../config/config";

export const People = objectType({
  name: "People",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("height");
    t.nonNull.string("mass");
    t.nonNull.string("gender");
    t.nonNull.string("homeworld");
  },
});

let peoples: NexusGenObjects["People"][] = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    gender: "n/a",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
];

// get all people
export const peopleQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "People",
      async resolve(parents, context, args, info) {
        const response = await fetch(`${baseURL}people`).then((res) =>
          res.json()
        );
        return response?.results;
      },
    });
  },
});

// get people by name
export const getPeopleQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("people", {
      type: "People",
      args: {
        search: stringArg(),
      },
      async resolve(parents, args, context, info) {
        const { search } = args;
        const response = await fetch(`${baseURL}people/?search=${search}`).then(
          (res) => res.json()
        );
        return response?.results;
      },
    });
  },
});

// create people
export const peopleMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPeople", {
      type: "People",
      args: {
        name: nonNull(stringArg()),
        height: nonNull(stringArg()),
        mass: nonNull(stringArg()),
        gender: nonNull(stringArg()),
        homeworld: nonNull(stringArg()),
      },
      resolve(parents, args, context) {
        const { name, height, mass, gender, homeworld } = args;

        const people = {
          name,
          height,
          mass,
          gender,
          homeworld,
        };
        peoples.push(people);
        return people;
      },
    });
  },
});
