import path from 'path';

module.exports = {
  client: 'mysql',
  connection: process.env.DATABASE_URL || { user: 'root', password: '123456789', database: 'proffy' },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },

};
