const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({ note : String, createdAt: Number });

module.exports =  noteSchema