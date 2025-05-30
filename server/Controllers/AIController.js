import StatementModel from "../Models/StatementsModel.js";
import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const createPlayers = async (req, res) => {
  console.log("Body type:", typeof req.body, "Body:", req.body);
  const data = req.body.characters;
  const playersCreated = [];
  const statementsCreated = [];

  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({ message: "Invalid data format" });
  }

  try {
    await Promise.all(
      data.map(async (playerData) => {
        console.log(`Processing player: ${playerData.name}`);
        const newPlayer = await createPlayer(playerData.name);
        if (newPlayer) {
          console.log(`Player created: ${newPlayer.username}`);
          playersCreated.push(newPlayer);
          const playerStatements = await createPlayerStatements(newPlayer, playerData);
          console.log(`Statements created for player: ${newPlayer.username}`);
          if (playerStatements) {
            console.log(`Statements: ${JSON.stringify(playerStatements.statements)}`);
          }
          statementsCreated.push(playerStatements);
        }
      })
    );
    res.status(201).json({ playersCreated, statementsCreated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPlayerStatements = async (player, playerData) => {
  const newStatements = new StatementModel({
    gameId: "1",
    userId: player._id,
    statements: playerData.statements,
    lie: playerData.lie_index + 1,
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
  const hashedPass = await bcrypt.hash("123", salt);

  const newUser = new UserModel({
    username: getFirstName(name).toLowerCase(),
    password: hashedPass,
    firstname: getFirstName(name),
    lastname: getLastName(name),
  });

  console.log("Finding user:", newUser.username);

  try {
    const existentUser = await UserModel.findOne({ username: newUser.username });
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