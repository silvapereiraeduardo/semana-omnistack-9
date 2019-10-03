// index = retorna listagem
// show = retorna um unico elemento
// store = criar um elemento
// update = atualizar um elemento
// destroy = remover um elemento

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
