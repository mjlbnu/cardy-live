import StatementModel from "../Models/StatementsModel.js";

export const registerStatements = async (req, res) => {
  const { currentUserId, firstStatement, secondStatement, thirdStatement } =
    req.body;

  const newStatements = new StatementModel({
    gameId: "id1",
    userId: currentUserId,
    statements: [firstStatement, secondStatement, thirdStatement],
  });

  try {
    await newStatements.save();
    res.status(200).json(newStatements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStaments = async (req, res) => {};
