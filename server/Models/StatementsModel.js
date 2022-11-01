import mongoose from "mongoose";

const StatementSchema = mongoose.Schema(
  {
    gameId: { type: String, required: true },
    userId: { type: String, required: true },
    statements: [],
    lie: { type: Number, required: true },
  },
  { timestamps: true }
);

const StatementModel = mongoose.model("Statements", StatementSchema);

export default StatementModel;
