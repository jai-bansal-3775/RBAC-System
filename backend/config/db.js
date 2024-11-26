const mongoose = require('mongoose');
DATABASE_URL = "mongodb://0.0.0.0/octa" ;
const connectdb = async (DATABASE_URL) =>{
  try{
      const DB_OPTIONS = {
          dbName : "rabc",
      }
      await mongoose.connect(DATABASE_URL, DB_OPTIONS);
      console.log("Connected Successfully");

  }
  catch(err){
      console.log(err);
  }
}

// export default connectdb;

module.exports = connectdb;
