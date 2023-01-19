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
    /*
    const ranking = await RankingModel.aggregate([
      {
        $lookup: {
          from: "users", localField: "userId",
          foreignField: "_id", as: "user"
        }
      }
    ]);
    */
    
    //const ranking = await RankingModel.aggregate([{$lookup:{from:"users",localField:"rankings.userId",foreignField:"users._id", as:"user"}}]);
    const ranking = await RankingModel.aggregate([{$lookup:{from:"users",localField:"rankings.userId",foreignField:"users._id", as:"user"}}]);
    res.status(200).json(ranking);
  } catch (error) {
    res.status(404).json("No ranking found");
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
