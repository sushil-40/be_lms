import UesrSchema from "./UserSchema.js";

//insert new user

export const createNewUser = (userObj) => {
  return UesrSchema(userObj).save();
};
