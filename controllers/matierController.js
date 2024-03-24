const Matier = require("../models/Matier");
const factory = require("./factoryHandler");

exports.getMatier = factory.getOne(Matier);
exports.getAllMatiers = factory.getAll(Matier);
exports.updateMatier = factory.updateOne(Matier);
exports.deleteMatier = factory.deleteOne(Matier);
exports.createMatier = factory.createOne(Matier);
