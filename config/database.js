module.exports = {
  "development": {
    "username": 'postgres',
    "password": '440926',
    "database": 'api_adocao',
    "host": '127.0.0.1',
    "dialect": 'postgres',
  },
  "production" : {
    "username": 'postgres',
    "password": '440926',
    "database": 'api_adocao',
    "host": '127.0.0.1',
    "dialect": 'postgres',
    "operatorsAliases": false,
    "use_env_variable": "DATABASE_URL"
  }  
}