const User = require("../Models/UserModel"); //to import

const signupUser = async (req, res) => {
  //request and response
  try {
    const { firstname, lastname, email, phone, password } = req.body;
    const NewUser = new User({
      firstname,
      lastname,
      email,
      phone,
      password,
    }); //to store multiple values

    //async - synchronize the upcoming data
    //await - abort - makes it wait when multiple upcoming are there
    const SavedUser = await NewUser.save();
    res.status(200).json({
      message: "User Registered Successfully",
      data: SavedUser,
    }); //to convert into json format .json
  } catch (error) {
    res.status(404).json({
       message:"Couldn't Register the User",
       error:error.message
    })
  }
};

module.exports = {signupUser,};

//200-209 success
//300-309 warning
//400-409 error
//500-509 internal error , server error , network error
