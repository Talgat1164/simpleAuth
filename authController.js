// Controller - нужен для декомпозиции
// именно здесь мы описываем функции логина, регистрации и тд
// Класс можно не создавать, но он нужен чтобы скомпоновать функции в одну сущность
const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      // Здесь работал разовый код для сохранения ролей
      // коммит "Сохранили роли в базы данных"
      res.json("server work");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();
