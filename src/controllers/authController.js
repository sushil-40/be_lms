export const insertNewUser = (req, res, error) => {
  try {
    // to do signup process

    // receive the user data
    //encrypt the password
    // insert into DB
    // create an unique user activation link and send to their email

    res.json({
      status: "success",
      message: "TODO",
    });
  } catch (error) {
    next(error);
  }
};
