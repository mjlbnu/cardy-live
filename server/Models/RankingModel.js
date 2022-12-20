import mongoose from "mongoose";

const RankingSchema = mongoose.schema(
  {
    gameId: {type: String, required: true},
    userId: {type: String, required: true},
    points: {type: Number, required: true},
  },
  {timestamps: true}
);

const RankingModel = mongoose.model("Ranking", RankingSchema);

export default RankingModel;
