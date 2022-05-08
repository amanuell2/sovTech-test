import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
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

// get all people
export const peopleQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "People",
      args: {
        page: intArg() || 1,
        search: stringArg(),
      },
      async resolve(parents, args, context, info) {
        let { page, search } = args;
        let urlQuery;
        if (search) {
          urlQuery = `?search=${search}`;
        } else {
          if (page === undefined || page === null || page < 0) page = 1;
          urlQuery = `?page=${page}`;
        }
        const response = await fetch(`${baseURL}people/${urlQuery}`).then(
          (res:any) => res.json()
        );
        return response?.results || [];
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
          (res:any) => res.json()
        );
        return response?.results;
      },
    });
  },
});
