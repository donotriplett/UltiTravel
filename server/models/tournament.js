module.exports = function (sequelize, DataTypes) {
    return sequelize.define("tournament", {
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        dates: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        location: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        numberofplayers: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        transportationtype: {
            type: DataTypes.ENUM,
            values: ["flying", "driving"],
            validate: {
                notEmpty: true,
                notNull: true
            }
        },

        hotelsforfirstday: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },

        hotelsforsecondday: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },

        hotelsforthirdday: {
            type: DataTypes.INTEGER,
        },
    })
}