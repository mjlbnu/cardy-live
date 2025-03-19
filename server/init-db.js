import UserModel from "./Models/UserModel.js";
import bcrypt from "bcrypt";

export default async function initializeDatabase() {
  try {
    async function createUsers() {
      // Verificar se já existem usuários cadastrados
      const count = await UserModel.countDocuments();

      if (count > 0) {
        console.log("Dados já existentes, pulando inicialização.");
        return;
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash("123", salt);

      const users = [
        { username: "dexter", password: hashedPass, firstname: "Dexter", lastname: "Morgan", isAdmin: false },
        { username: "admin", password: hashedPass, firstname: "Admin", lastname: "Master", isAdmin: true },
      ];

      // Inserir os usuários no banco de dados
      await UserModel.insertMany(users);
      console.log("Usuários criados com sucesso!");
    }

    await createUsers();

  } catch (error) {
    console.error("Erro ao criar usuários:", error);
  }
}
