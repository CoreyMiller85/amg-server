const CommunityModel = require('./models/community');
const UnitModel = require('./models/unit');
const WorkorderModel = require('./models/Workorder');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

const Community = CommunityModel(sequelize, Sequelize);
const Unit = UnitModel(sequelize, Sequelize);
const Workorder = WorkorderModel(sequelize, Sequelize);

Community.hasMany(Unit);
Unit.belongsTo(Community);
Unit.hasMany(Workorder);
Workorder.belongsTo(Unit);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(`Database & tables created!`);
  })
  .catch((e) => console.log(e));

module.exports = { Community, Unit, Workorder };
