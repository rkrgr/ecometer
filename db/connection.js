const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:  "",
    database: "ecometerdb"
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected to database!");
    var sql = "INSERT INTO measure (name, companyId, timestamp) VALUES ('PV installiert', 1, curdate())";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    con.query("select * from measure", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    });
});
