import "dotenv/config"
import mongoose from "mongoose";

const { MONGO_URL} = process.env;

try {
    mongoose.connect(MONGO_URL)
    console.log("DEU CERTO AO CONECTAR COM O BANCO!")
} catch (error) {
    console.log("DEU CERTO AO CONECTAR COM O BANCO!", error)
}
