const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');


const db = {};

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  false
  })
} else {
  sequelize = new Sequelize(config);
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.adotante = require('./adotante.js')(sequelize, Sequelize);
db.ong = require('./ong.js')(sequelize, Sequelize);
db.pet = require('./pet.js')(sequelize, Sequelize);

db.pet.belongsTo(db.adotante);
db.pet.belongsTo(db.ong);
db.adotante.hasMany(db.pet);
db.ong.hasMany(db.pet);

module.exports = db;
