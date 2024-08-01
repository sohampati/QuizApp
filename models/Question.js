// models/question.js
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING,  // Specified length for question text
      allowNull: false
    },
    quizId: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Quiz',
        key: 'id'
      }
    },

    qType: {
        type: DataTypes.ENUM('MULTIPLE_CHOICE', 'TRUE_FALSE', 'FILL_IN_THE_BLANK', 'OPEN_ENDED'),
        defaultValue: 'MULTIPLE_CHOICE',
        allowNull: false
      },
  });

  Question.associate = function (models) {
    Question.belongsTo(models.Quiz, { foreignKey: 'quizId' });
    Question.hasMany(models.Option, { foreignKey: 'questionId' });
  };

  return Question;
};
