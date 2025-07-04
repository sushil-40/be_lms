import bcrypt, { hashSync } from "bcryptjs";

const saltRound = 15;

export const hashPassword = (plainPasword) => {
  return bcrypt.hashSync(plainPasword, saltRound);
};
