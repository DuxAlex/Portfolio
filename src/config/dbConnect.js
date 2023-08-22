import mongoose from "mongoose"

mongoose.connect(
    "mongodb+srv://admin:Krypto@cluster0.yfwgljf.mongodb.net/git"
);

let db = mongoose.connection;

export default db;