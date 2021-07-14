const { Sequelize, DataTypes,Model,Op } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', '123456', {
  port: 3306,
  host: 'localhost',
  dialect: 'mysql'
});

class Product extends Model {}

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
  score:DataTypes.DOUBLE
},{
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
});


async function queryProducts() {
  // 1.查询数据库中products表中所有的内容
  // const results = await Product.findAll({
  //   where:{
  //     price: {
  //       [Op.gte]: 5000
  //     }
  //   }
  // });
  // console.log(results);

  // 2.插入数据
  // const result = await Product.create({
  //   title: '三星Galaxy',
  //   price: 8888,
  //   score: 5.5
  // });
  // console.log(result);

  // 3.更新数据
  const result = await Product.update({
    price: 3688
  },{
    where: {
      id : 1
    }
  });
  console.log(result);
}

queryProducts();