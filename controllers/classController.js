const Class = require("../models/Class");
const factory = require("./factoryHandler");

exports.getClass = factory.getOne(Class);
exports.getAllClasss = factory.getAll(Class);
exports.updateClass = factory.updateOne(Class);
exports.deleteClass = factory.deleteOne(Class);
exports.createClass = factory.createOne(Class);
