import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
   try {
       const { fullName, username, password, confirmPassword, gender } = req.body;

       if (password !== confirmPassword) {
           return res.status(400).json({ error: "Passwords do not match" });
       }
       
       const user = await User.findOne({ username });
        
       if (user) {
           return res.status(400).json({ error: "User already exists" });
       }

       // HASH PASSWORD HERE
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);

       // https://avatar-placeholder.iran.liara.run/

       const girlProfilePic = `https://avatar.iran.liara.run/public/girl${username}`
       const boyProfilePic = `https://avatar.iran.liara.run/public/boy${username}`

       const newUser = new User({
           fullName,
           username,
           password: hashedPassword,
           gender,
           profilePic: gender === "male"? boyProfilePic : girlProfilePic
       });

       if (newUser) {
           //generate JWT token here
           generateTokenAndSetCookie(newUser._id, res);
           await newUser.save();

           

       res.status(201).json({
           _id: newUser._id,
           fullName: newUser.fullName,
           username: newUser.username,
           gender: newUser.gender,
           profilePic: newUser.profilePic
        });
       } else {
           res.status(400).json({ error: "invalid user data" });
       }


   } catch (error) {
       console.log("Error is signup controller", error.message);
       res.status(500).json({error: "Internal Server Error"});
   }
}

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}