const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("username", "username is required").notEmpty(),
  check("email", "email is required").notEmpty(),
  check("email", "check email").isEmail(),

  check("password", "password is required").isLength({ min: 6, max: 30 }),
];

exports.loginRules = () => [
  check("email", "email is required").notEmpty(),
  check("email", "check email").isEmail(),

  check(
    "password",
    "password be between 6 character and 30 charater "
  ).isLength({ min: 6, max: 30 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};
