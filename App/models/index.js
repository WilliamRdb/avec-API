const User = require('./user');
const Bed = require('./bed');

User.hasOne(Bed, {
  foreignKey: "user_bed",
  as: "bed",
});

Bed.belongsTo(User, {
  foreignKey: "user_bed",
  as:"user"
});

module.exports = {User, Bed};