import RankingModel from "../Models/RankingModel.js";

export const savePlayerPoints = async (req, res) => {
  const { gameId, userId, points } = req.body;

  const newRanking = new RankingModel({
    gameId: gameId,
    userId: userId,
    points: points,
  });

  try {
    await newRanking.save();
    res.status(200).json(newRanking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePlayerPoints = async (req, res) => {
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
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
