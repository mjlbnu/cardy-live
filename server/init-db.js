import mongoose from "mongoose";
import UserModel from "./Models/UserModel.js";

export default async function initializeDatabase() {
  // Verificar se há dados na coleção
  const count = await UserModel.countDocuments();
  if (count === 0) {// Definir o schema para a coleção Users

    const UserSchema = new mongoose.Schema({
      username: { type: String, required: true },
      password: { type: String, required: true },
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      isAdmin: { type: Boolean, default: false },
      createdAt: { type: Date, default: Date.now },
    });

    // Criar ou reutilizar o modelo baseado no schema
    const UserModel = mongoose.models.Users || mongoose.model("Users", UserSchema);
    console.log("Modelo criado com sucesso!");

    try {
      const users = [
        { username: "dexter", password: "123", firstname: "Dexter", lastname: "Morgan", isAdmin: false },
        { username: "admin", password: "123", firstname: "Admin", lastname: "Master", isAdmin: true },
      ];
  
      // Inserir os usuários no banco de dados
      await UserModel.insertMany(users);
      console.log("Usuários criados com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuários:", error);
    }

  } else {
    console.log('Dados já existentes, pulando inicialização.');
  }
}
