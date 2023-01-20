import mongoose from "mongoose";
import RankingModel from "../Models/RankingModel.js";
import UserModel from "../Models/UserModel.js";

export const getRanking = async (req, res) => {
  try {
    const ranking = await RankingModel.find();
    res.status(200).json(ranking);
  } catch (error) {
    res.status(404).json("No ranking found");
  }
};

export const getRankingAgr = async (req, res) => {
  try {
    
    
    const ranking = await RankingModel.aggregate([
      {
        '$lookup': {
          //searching collection name
          'from': 'users',
          //setting variable [searchId] where your string converted to ObjectId
          'let': { "searchId": { $toObjectId: "$userId" } },

          //search query with our [searchId] value
          "pipeline": [
            //searching [searchId] value equals your field [_id]
            { "$match": { "$expr": [{ "_id": "$$searchId" }] } },
            //projecting only fields you reaaly need, otherwise you will store all - huge data loads
            { "$project": { "firstname": 1 } }

          ],
          localField: "userId",
          foreignField: "_id",

          'as': 'user'
        }
      },
    ]);
    
    /*
    const ranking = await RankingModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId("63c1f731e9a0cf579bbfd3f7"),
        },
      },
      
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "lastname", as: "user"
        }
      }
      
    ]);
    */
   
    res.status(200).json(ranking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const savePlayerPoints = async (req, res) => {
  const { gameId, userId, points } = req.body;
  try {
    const userRanking = await RankingModel.findOne({
      userId: userId,
      gameId: gameId,
    });
    if (userRanking) {
      await userRanking.updateOne({
        $inc: { points: points },
      });
      res.status(200).json("Points updated");
      return;
    }
    const newRanking = new RankingModel({
      gameId: gameId,
      userId: userId,
      points: points,
    });
    await newRanking.save();
    res.status(200).json(newRanking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
