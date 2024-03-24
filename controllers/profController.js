const Prof = require("../models/Prof");
const Student = require("../models/Student");
const AppError = require("../utils/AppError");
const factory = require("./factoryHandler");
const catchAsync = require("express-async-handler");

exports.markAbsence = catchAsync(async (req, res) => {
  const { studentId, subjectId } = req.body;
  const date = Date.now();
  const student = await Student.findById(studentId);
  if (!student) {
    return new AppError("student not found", 401);
  }
  let attendanceRecord = student.attendance.find((record) =>
    record.subject.equals(subjectId)
  );
  if (!attendanceRecord) {
    attendanceRecord = {
      subject: subjectId,
      absences: 1,
      date: date,
    };
    student.attendance.push(attendanceRecord);
  } else {
    attendanceRecord.absences += 1;
    attendanceRecord.date.push(date);
  }

  await student.save();

  res.status(200).json({
    status: "success",
    data: student,
  });
});

exports.getProf = factory.getOne(Prof, { path: "subject" });
exports.getAllProfs = factory.getAll(Prof);
exports.updateProf = factory.updateOne(Prof);
exports.deleteProf = factory.deleteOne(Prof);
exports.createProf = factory.createOne(Prof);
