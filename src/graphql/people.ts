import { extendType, objectType, nonNull, stringArg } from "nexus";

import { NexusGenObjects } from "../../generated/nexus";

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

export const peopleQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "People",
      resolve(parents, context, args, info) {
        return peoples;
      },
    });
  },
});

export const getPeopleQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("people", {
      type: "People",
      args: {
        name: stringArg(),
      },
      resolve(parents, args, context, info) {
        const { name } = args;
        return peoples.find((people) => people.name === name);
      },
    });
  },
});

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
