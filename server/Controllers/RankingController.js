import RankingModel from "../Models/RankingModel.js";
import UserModel from "../Models/UserModel.js";

export const getRanking = async (_, res) => {
  try {
    const ranking = await RankingModel.find();
    res.status(200).json(ranking);
  } catch (error) {
    res.status(404).json("No ranking found");
  }
};

export const getRankingAgr = async (_, res) => {
  try {
    const ranking = await UserModel.aggregate([
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
      {
        $sort: {
          "ranking.points": -1,
        },
      },
    ]);
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
