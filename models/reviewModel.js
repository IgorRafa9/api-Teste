module.exports = (sequelize, DataTypes) => {

  const Review = sequelize.define("review",{
    rating:{
      type: DataTypes.INTEGER
    },
    descricao: {
      type: DataTypes.TEXT
    },
  })
  return Review
}