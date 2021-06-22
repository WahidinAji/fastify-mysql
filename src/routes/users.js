const { getAllUsers } = require('../controllers/usersController');

const User = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};
const Schema = {
  response: {
    200: {
      type: 'array',
      items: User,
    },
  },
};

const getStudentsOpts = {
  schema: Schema,
  handler: getAllUsers,
};

function studentRoutes(fastify, options, done) {
  fastify.get('/users', getStudentsOpts);
  done();
}

module.exports = studentRoutes;
