import mongoose from "mongoose";
// const mongoose = require('cookie-parser')

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("😎😎 db conectada");
} catch (error) {
    console.log("error");
}