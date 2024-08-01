const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Quiz = Sequelize.define('Quiz', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false


        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true

        },
        createdBy: {
            type: DataTypes.BIGINT,
            references: {
                model: 'User',
                key: 'id'
              }
        }
    });
    Quiz.associate = function (models) {
        Quiz.belongsTo(models.User, { foreignKey: 'createdBy' });
      };
    
      return Quiz;
};





























