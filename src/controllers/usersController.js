const users = require('../models/usersModel');

const getAllUsers = (req, reply) => {
  reply.send(users);
};
module.exports = {
  getAllUsers,
};
