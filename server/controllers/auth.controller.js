const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.register = async(req,res) => {
// Our register logic starts here
try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName )) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
        return res.status(409).json({
            message: 'User Already Exist. Please Login'
        });
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    res.status(201).json({
        message: 'You have Successfully Registered. Please Login to the System'
      });
  } catch (err) {
    console.log(err);
  }
}

exports.login = async(req,res) => {
    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
            return res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { userId: user._id,role:user.role },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          // user
          return res.status(201).json({
            results:{
                user,
                token
            },
            message: 'You have Successfully Logged In'
          });
        }
        return res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
}