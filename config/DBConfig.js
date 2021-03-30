
const database ={
    database: 'mrxz', //数据库名称
    user: 'root', //mysql用户名
    password: 'admin', //mysql密码
    PORT: '3306', //mysql端口号
    host: "127.0.0.1", //服务器ip
    socketPath: '/tmp/mysql.sock' //解决 Error: connect ECONNREFUSED 127.0.0.1:3306
   }
   module.exports = database