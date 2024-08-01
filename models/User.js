// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('ADMIN', 'USER', 'MODERATOR'),
        defaultValue: 'USER',
        allowNull: false
      },
      
      
    });
  
    User.associate = function (models) {
      User.hasMany(models.Quiz, {foreignKey: 'createdBy'})
    };
  
    return User;
  };
  