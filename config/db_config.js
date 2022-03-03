module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Igj(8899)',
  DB: 'api_teste',
  dialect: 'mysql',

  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}