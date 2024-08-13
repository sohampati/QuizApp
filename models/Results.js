module.exports = (sequelize, DataTypes) => {
    const Results = sequelize.define('Results', {
        userId: {
            type: DataTypes.BIGINT,
            primaryKey: true,  // Part of composite primary key
            references: {
                model: 'User',
                key: 'id'
            }
        },
        quizId: {
            type: DataTypes.BIGINT,
            primaryKey: true,  // Part of composite primary key
            references: {
                model: 'Quiz',
                key: 'id'
            }
        },
        score: {
            type: DataTypes.FLOAT,  // Data type for score
            allowNull: false
        }
    }, {
        // Additional options
        indexes: [
            {
                unique: true,
                fields: ['userId', 'quizId']
            }
        ]
    });

    Results.associate = function (models) {
        Results.belongsTo(models.User, { foreignKey: 'userId' });
        Results.belongsTo(models.Quiz, { foreignKey: 'quizId' });
    };

    return Results;
};
