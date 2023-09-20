const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("postgres://yibeumit:wRhSAFaK8JU5YLsvLjJwWYf2gdu6EkkD@silly.db.elephantsql.com/yibeumit",{
define:{
  timetamps:true,
  underscored:true,
},
});

  try {
    sequelize.authenticate();
    console.log('Conectado com o ElephantSQL!');
  } catch (error) {
    console.error('Atenção, a conexão falhou!:', error);
  }

  module.exports={Sequelize,sequelize};