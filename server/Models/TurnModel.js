import mongoose from "mongoose";

const TurnSchema = mongoose.Schema(
  {
    gameId: { type: String, required: true },
    turnId: { type: Number, required: true },
    userId: { type: String, required: true },
    points: { type: Number, required: true },
    statementId: { type: String, required: true },
  },
  { timestamps: true }
);

const TurModel = mongoose.models.Turns || mongoose.model("Turns", TurnSchema);

export default TurModel;