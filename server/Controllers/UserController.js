import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

// @desc   Get all users
// @route  GET /user/list
// @access Public
export const getUsers = async (_, res) => {
  try {
    let users = await UserModel.find();
    if (users) {
      users = users.map((user) => {
        const { password, ...otherInfo } = user._doc;
        return otherInfo;
      });
      return res.status(200).json(users);
    }
  } catch (error) {
    res.status(404).json("No users found");
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
      return;
    }
    res.status(404).json("No such user exists");
  } catch (error) {
    res.status(500).json(error);
  }
};

/*
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
    return;
  }
  res.status(403).json("Access Denied");
};
*/

export const updateUser = async (req, res) => {
  const id = req.body._id;

  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
      return;
    } catch (error) {
      res.status(500).json(error);
    }
  }
  res.status(403).json("Access Denied");
};

export const getUserProfile = async (req, res) => {
  try {
    const profile = await UserModel.aggregate([
      { $match : { firstname : "dex" } },
      {
        $project: {
          _id: {
            $toString: "$_id",
          },
          firstname: 1,
        },
      },
      {
        $lookup: {
          from: "rankings",
          localField: "_id",
          foreignField: "userId",
          as: "ranking",
          pipeline: [
            {
              $project: {
                points: 1,
              },
            },
          ],
        },
      },
    ]);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
