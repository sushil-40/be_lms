import { createNewUser } from "../models/user/userModel.js";
import { hashPassword } from "../utils/bcrypt.js";

export const insertNewUser = async (req, res, next) => {
  try {
    // to do signup process
    // receive the user data
    //encrypt the password
    // insert into DB
    const { password } = req.body;

    req.body.password = hashPassword(password);

    const user = await createNewUser(req.body);

    if (user?._id) {
      res.json({
        status: "success",
        message: "TODO",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create an account, Please try again later!",
    });

    return;

    // create an unique user activation link and send to their email
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "The email already exists for another user, try different emai or reset the password";
      error.statusCode = 200;
    }
    next(error);
  }
};
