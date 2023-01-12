// Controller - нужен для декомпозиции
// именно здесь мы описываем функции логина, регистрации и тд
// Класс можно не создавать, но он нужен чтобы скомпоновать функции в одну сущность
const User = require("./models/User");
const Role = require("./models/Role");

class authController {
  async registration(req, res) {
    try {
    } catch (e) {}
  }

  async login(req, res) {
    try {
    } catch (e) {}
  }

  async getUsers(req, res) {
    try {
      const userRole = new Role();
      const adminRole = new Role({ value: "ADMIN" });
      await userRole.save();
      await adminRole.save();
      // Вписали для сохранения колекции ролей в бд
      // Костыльно но робит
      res.json("server work");
    } catch (e) {}
  }
}

module.exports = new authController();
