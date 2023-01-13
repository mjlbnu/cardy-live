import RankingModel from "../Models/RankingModel";

export const updatePlayerPoints = async (req, res) => {
  const { gameId, userId, points } = req.body;

  try {
    const userRanking = await RankingModel.findOne({ userId: userId, gameId: gameId });
    if (userRanking) {
      await userRanking.updateOne({
        $inc: { points: points },
      });
      res.status(200).json("Points updated");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}