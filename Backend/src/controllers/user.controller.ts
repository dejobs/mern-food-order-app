import {Request, Response} from "express";
import User from "../models/user.model";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const {auth0Id} = req.body;

    const validUser = await User.findOne({auth0Id});

    if (validUser) {
      return res.status(200).json({message: "User already exist"});
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (err) {
    console.log(err);
  }
};

export default {
  createCurrentUser,
};
