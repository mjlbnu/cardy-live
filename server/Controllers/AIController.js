import StatementModel from "../Models/StatementsModel.js";
import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const createPlayers = async (req, res) => {
  data = req.body;
  playersCreated = [];
  statementsCreated = [];

  if (!data || !Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: "Invalid data format" });
  }

  try {
    data.map(async (player) => {
      const newPlayer = await createPlayer(player.name);
      if (newPlayer) {
        playersCreated.push(newPlayer);
        const playerStatements = await createPlayerStatements(newPlayer);
        statementsCreated.push(playerStatements);
      }
    })
    res.status(201).json({ playersCreated, statementsCreated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPlayerStatements = async (player) => {
  const newStatements = new StatementModel({
    gameId: "1",
    userId: player._id,
    statements: player.statements,
    lie: player.lie_index + 1,
    played: false,
  });

  try {
    return await newStatements.save();
  } catch (error) {
    console.error(error.message);
  }
}

const createPlayer = async (name) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username: getFirstName(name).toLowerCase(),
    password: hashedPass,
    firstname: getFirstName(name),
    lastname: getLastName(name),
  });

  try {
    const existentUser = await UserModel.findOne({ username: username });
    if (existentUser) {
      throw new Error(`The username ${username} already exists`);
    }
    return await newUser.save();
  } catch (error) {
    console.error(error.message);
  }

}

const getFirstName = (name) => {
  if (name && name.includes(' ')) {
    return name.split(' ')[0];
  }
  return name;
}

const getLastName = (name) => {
  if (name && name.includes(' ')) {
    return name.split(' ')[1];
  }
  return '';
}