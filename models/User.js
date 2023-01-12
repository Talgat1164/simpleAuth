// Схема описывает то как наш пользователь будет хранится в базе данных
// Модель схемы юзер
const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("User", User);
