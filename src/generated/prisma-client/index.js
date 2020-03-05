"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Book",
    embedded: false
  },
  {
    name: "Era",
    embedded: false
  },
  {
    name: "Author",
    embedded: false
  },
  {
    name: "Series",
    embedded: false
  },
  {
    name: "BookStatus",
    embedded: false
  },
  {
    name: "EpochTime",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/rosemariesousa-7647ba/jedi_library/dev`
});
exports.prisma = new exports.Prisma();
