module.exports = function (sequelize, DataTypes) {
    return sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        passwordhash: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        teamname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        division: {
            type: DataTypes.ENUM,
            values: ["Youth", "College", "Club", "Masters", "Beach"],
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

    })
}