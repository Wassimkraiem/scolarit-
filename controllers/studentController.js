const Student = require("../models/Student");
const factory = require("./factoryHandler");

exports.getStudent = factory.getOne(Student, { path: "attendance" });
exports.getAllStudents = factory.getAll(Student);
exports.updateStudent = factory.updateOne(Student);
exports.deleteStudent = factory.deleteOne(Student);
exports.createStudent = factory.createOne(Student);
