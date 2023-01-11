import StatementModel from "../Models/StatementsModel.js";

export const saveStatements = async (req, res) => {
  const {id, currentUserId, gameId, statements, lie} = req.body;

  if (!id) {
    const newStatements = new StatementModel({
      gameId: gameId,
      userId: currentUserId,
      statements: statements,
      lie: lie,
    });
    try {
      await newStatements.save();
      res.status(200).json(newStatements);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return;
  }
  try {
    const statementsFound = await StatementModel.findById(id);
      await statementsFound.updateOne({
        $set: { statements: statements, lie: lie },
      });
      res.status(200).json("Statements updated");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getGamerStatements = async (req, res) => {
  const gamerId = req.params.id;
  const bringLie = req.params.bringLie
  try {
    let statements = await StatementModel.findOne({ userId: gamerId });
    if (statements && bringLie === 'false') {
      statements.lie = null;
    }
    res.status(200).json(statements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerStatements = async (req, res) => {
  const { gameId, currentUserId, statements, lie } = req.body;

  const newStatements = new StatementModel({
    gameId: gameId,
    userId: currentUserId,
    statements: statements,
    lie: lie,
  });

  try {
    await newStatements.save();
    res.status(200).json(newStatements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStatements = async (req, res) => {
  const id = req.params.id;

  try {
    const statements = await StatementModel.findById(id);
    res.status(200).json(statements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStatements = async (req, res) => {
  const {
    currentUserId,
    firstStatement,
    secondStatement,
    thirdStatement,
    lie,
  } = req.body;
  const id = req.params.id;

  const updatedStatements = [firstStatement, secondStatement, thirdStatement];

  try {
    const statements = await StatementModel.findById(id);
    if (statements.userId === currentUserId) {
      await statements.updateOne({
        $set: { statements: updatedStatements, lie: lie },
      });
      res.status(200).json("Statements updated");
      return;
    }
    res.status(403).json("Action forbidden");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
