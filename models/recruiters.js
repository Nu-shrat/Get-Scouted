const { v4: uuidv4 } = require("uuid");

const User = require("./users");

const Sequelize = require("./index").Sequelize;
const Datatype = require("./index").DataType;

const Recruiter = Sequelize.define("recruiters", {
    id: {
        type: Datatype.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
        allowNull: false,
    },
    companyName: {
        type: Datatype.STRING,
        allowNull: false,
    },

    contractNumber: {
        type: Datatype.STRING,
        allowNull: false,
    },

    yearOfEstablishment: {
        type: Datatype.STRING,
        allowNull: false,
    },

    companyType: {
        type: Datatype.STRING,
        allowNull: false,
        defaultValue: "open", // open, blocked, jobholder
    },

    country: {
        type: Datatype.STRING,
        allowNull: false,
        defaultValue: "Bangladesh"
    },

    region: {
        type: Datatype.STRING,
        allowNull: false,
        defaultValue: "Dhaka"
    },
    companyAddress: {
        type: Datatype.STRING,
        allowNull: false,
    },
    businessDescription: {
        type: Datatype.STRING,
        allowNull: false,
    },
    tradingLicense: {
        type: Datatype.STRING,
        allowNull: false,
    },
    websiteURL: {
        type: Datatype.STRING,
        allowNull: false,
    },
    uid: {
        type: Datatype.UUID,
        allowNull: false,
        unique: true,

        references: {
            model: User,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
    },
});

module.exports = Recruiter;