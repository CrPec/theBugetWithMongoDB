const { MongoClient } = require("mongodb");

let _db;
 
module.exports = {
  connectToServer: () => {
    const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
   
    client.connect()
      .then(res => {
        _db = res.db(process.env.DB_NAME);
        console.log(`Server is running on port: ${process.env.PORT}`);
        console.log("Successfully connected to MongoDB.");
      })
      .catch(err => console.log(`Server is not working on port: ${process.env.PORT}\n${err}`));
  },
  getDb: () => {
    return _db;
  },
}