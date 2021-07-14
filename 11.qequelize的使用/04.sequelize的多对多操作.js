const { Sequelize, DataTypes,Model,Op } = require('sequelize');

const sequelize = new Sequelize('coderhub', 'root', '123456', {
  port: 3306,
  host: 'localhost',
  dialect: 'mysql'
});

// Student
class Student extends Model{}
Student.init({
  id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  age:DataTypes.INTEGER
},{
  tableName:'students',
  createdAt:false,
  updatedAt:false,
  sequelize
});

// Course
class Course extends Model{}
Course.init({
  id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:DataTypes.DOUBLE
},{
  tableName:'course',
  updatedAt:false,
  createdAt:false,
  sequelize
});

// studentCourse
class StudentCourse extends Model{}
StudentCourse.init({
  id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  studentId:{
    type:DataTypes.INTEGER,
    field:'student_id', //指定文件对象对应字段
    references:{
      model:Student,
      key:'id'
    }
  },
  coutseId:{
    type:DataTypes.INTEGER,
    field:'course_id', //指定文件对象对应字段
    references:{
      model:Course,
      key:'id'
    }
  }
},{
  tableName:'students_select_courses',
  createdAt:false,
  updatedAt:false,
  sequelize
});


// 多对多关系的联系
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey:'student_id',
  otherKey:'course_id'
});

Course.belongsToMany(Student, {
  through:StudentCourse,
  foreignKey:'course_id',
  otherKey:'student_id'
});

async function queryProducts() {
  const result = await Student.findAll({
    include:{
      model: Course
    }
  });
  console.log(result);
}

queryProducts();