module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define("produto",{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prod:{
      type: DataTypes.STRING,
      allowNull: false
    },
    preco:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT
    },
    publicacao: {
      type: DataTypes.BOOLEAN
    }
  })
  return Product
}