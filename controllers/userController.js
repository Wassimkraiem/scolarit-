const User = require("./../models/userModel");
const catchAsync = require("express-async-handler");
const AppError = require("./../utils/AppError");
const factory = require("./factoryHandler");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "name", "email");
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});
exports.saveAddress = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, {
    address: req.body.address,
  });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
exports.getWishlist = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate("wishlist");
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});
exports.blockUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { isBlocked: true },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    msg: "user blocked",
  });
});
exports.unblockUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      isBlocked: true,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    msg: "user unblocked",
  });
});
exports.getUser = factory.getOne(User, { path: "wishlist" });
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
