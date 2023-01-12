const { Schema, model } = require("mongoose");
// Схема описывает то как наш пользователь будет хранится в базе данных

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("User", User);
// Модель схемы юзер
