const mysql = require('mysql');

const connection = mysql.createConnection({
     host: 'localhost',
     port: 3306,
     user: 'root',
     password: 'root',
     database: 'employee_DB'
 });

 connection.connect(err => {
     if (err) throw err;
     console.log('connected as id' + connection.threadId);

//     connection.query("SELECT * FROM products", (err, res) => {
//             if (err) throw err;
//             console.log(res);
//     })

//     connection.end();
// });


// function createProduct () {
//     console.log("Inserting a new product...\n");
//     const query = connection.query(
//         "INSERT INTO products SET ?",
//         {
//             flavor: "Rocky Road",
//             price: 3.0,
//             quantity: 50,
//         },
//         (err, res) => {
//             console.log(`${res.affectedRows} product inserted!\n`);
//         }
//     )
// };
