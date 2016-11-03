export default {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5433',
    user: 'postgres',
    password: 'rea123',
    database: 'dev_boletinho',
    charset: 'UTF8',
  },
  pool: {
    min: 0,
    max: 7,
  },
};
