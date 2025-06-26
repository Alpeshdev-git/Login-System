const mysql=require("mysql2")

const createdatabasequery='CREATE DATABASE IF NOT EXISTS loginDB'

const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
        )`


const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alpesh@5211'
})

db.connect((err)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log("database connect succefully")
})

db.query(createdatabasequery,(err)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log("database created suucefully")
})

const tableconnection=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alpesh@5211',
  database:'logindb'
})

tableconnection.query(createUsersTable,(err)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log("table created succefully");
})
tableconnection.connect((err) => {
  if (err) {
    console.log("Connection to loginDB failed:", err);
    return;
  }
  console.log("Connected to loginDB.")});

  module.exports = {tableconnection};