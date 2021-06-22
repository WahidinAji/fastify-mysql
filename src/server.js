const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-mysql' },
  },
});
fastify.register(require('./routes/users'));

const PORT = 5000;
const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log(error);
    process.exit(1);
  }
};

start();
