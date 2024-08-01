// models/results.js
module.exports = (sequelize, DataTypes) => {
    const Results = sequelize.define('Results', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.BIGINT,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      quizId: {
        type: DataTypes.BIGINT,
        references: {
          model: 'Quiz',
          key: 'id'
        }
      },
      score: {
        type: DataTypes.FLOAT,  // Data type for score
        allowNull: false
      },

    });
  
    Results.associate = function (models) {
      Results.belongsTo(models.User, { foreignKey: 'userId' });
      Results.belongsTo(models.Quiz, { foreignKey: 'quizId' });
    };
  
    return Results;
  };
  