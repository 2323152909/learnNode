const { Sequelize, DataTypes,Model,Op } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', '123456', {
  port: 3306,
  host: 'localhost',
  dialect: 'mysql'
});

class Product extends Model {}

class Brand extends Model {}

const brand = Brand.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  website:DataTypes.STRING,
  phoneRank:DataTypes.INTEGER
},{
  tableName: 'brand',
  updatedAt: false,
  createdAt: false,
  sequelize
});

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title:{
    type: DataTypes.STRING,
    allowNull : false,
  },
  price:{
    type: DataTypes.DOUBLE,
  },
  score:DataTypes.DOUBLE,
  brandId:{
    type:DataTypes.INTEGER,
    field: 'brand_id',
    references:{
      model: Brand,
      key: 'id'
    }
  }
},{
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
});


// 将两站表联系在一起
Product.belongsTo(Brand, {
  foreignKey:'brandId'
});


async function queryProducts() {
  const result = await Product.findAll({
    include:{
      model: Brand
    }
  });
  console.log(result);
}

queryProducts();