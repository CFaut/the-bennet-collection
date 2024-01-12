
const mysql = require('mysql');


  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Evgenia7!",
    database: "the_bennet_collection",
    port: 3306
  });
  
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


export async function getDresses() {
    try {
      let results = await db.query("SELECT * FROM dresses")
      return results;
    } catch(error){
        console.log("error")
      console.log(error)
    }
};

// export async function getDress(id) {
//     try {
//       let results = await db.query("SELECT * FROM dresses WHERE id=?" [id])
//       return results;
//     } catch(error){
//       console.log(error)
//     }
// };

