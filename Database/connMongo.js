const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/testeMongoDB2";

const cliente = new MongoClient(uri);

async function run() {
  try {
    await cliente.connect();

    console.log('Conectou ao Mongo DB!!!!')
  } catch (error) {
    console.log(error);
  }
}

run();
module.exports = cliente;
