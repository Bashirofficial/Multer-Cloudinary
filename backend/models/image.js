const { Model, Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  Image.init(
    {
      url: DataTypes.STRING,
      secure_url: DataTypes.STRING,
      tags: DataTypes.STRING,
      uploadedAt: DataTypes.DATE,
      userId: DataTypes.STRING,
      idDeleted: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      Sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
