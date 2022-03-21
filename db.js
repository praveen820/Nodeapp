// const mysql = require('mysql');

// const connection =mysql.createConnection ({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'nodeapp'
// });
// connection.connect(function (err){
//     if(err)
//       console.log(err);
//       else console.log('connection succeeded');
// });
 
// let sql = (`insert into nodeapp(emp_id,first_name,last_name,salary) values(2,'ayush','sharma','100000')`);

// connection.query(sql,(err, results) => {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(results);
// });