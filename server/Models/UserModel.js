import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default UserModel;
