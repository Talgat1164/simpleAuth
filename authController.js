// Controller - нужен для декомпозиции
// именно здесь мы описываем функции логина, регистрации и тд
// Класс можно не создавать, но он нужен чтобы скомпоновать функции в одну сущность
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
      res.json("server work");
    } catch (e) {}
  }
}

module.exports = new authController();
