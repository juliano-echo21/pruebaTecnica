module.exports = {
  type: 'postgres',
  host: 'database-test',
  port: '5432',
  username: 'database',
  password: 'database1234',
  database: 'database',
  entities: ['src/entities/**/*.ts'],
  synchronize: true,
  //seeds: ['src/database/seeds/**/*{.ts,.js}'],
};
