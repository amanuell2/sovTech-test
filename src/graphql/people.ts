import { objectType } from "nexus";

export const People = objectType({
  name: "People",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.float("height");
    t.nonNull.float("mass");
    t.nonNull.string("gender");
    t.nonNull.string("homeworld");
  },
});
