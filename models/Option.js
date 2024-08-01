// models/option.js
module.exports = (sequelize, DataTypes) => {
    const Option = sequelize.define('Option', {
      
      optionText: {
        type: DataTypes.STRING,  // Specified length for option text
        allowNull: false
        
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      questionId: {
        type: DataTypes.BIGINT,
        references: {
          model: 'Question',
          key: 'id'
        }
      },

    });
  
    Option.associate = function (models) {
      Option.belongsTo(models.Question, { foreignKey: 'questionId' });
    };
  
    return Option;
  };
  