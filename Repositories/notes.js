const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URI);

const noteSchema = require("../models/note.js")

const Note = mongoose.model('Note', noteSchema);

const createNote = (someNote) => {
    const date = Date.now()
    const noteToSave = { note: someNote, createdAt: date }
    Note.create(noteToSave, (err, note) => {
        if (err) {
            console.log(err)
        } else {
            console.log("note created ", note)
        }
    })
}
const getNoteByID = async (id) => {
    try {
        const returnNote = await Note.findById(id)
        return {
            success: true,
            data: returnNote,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            data: {},
            erro: error
        }
    }
}

const updateById = async (id, newNote) => {
    try {
        const note = await Note.findById(id)
        note.note = newNote
        await note.save()
        return true
    } catch (error) {
        return false
    }

}

const deleteById = async (id) => {
    try {
        const result = await Note.findByIdAndRemove(id)
        if(result){
            return {success:true,data:result};
        }else{
            return  {success:false};
        }

        
    } catch (error) {
        return {
            success: false,
            erro: error
        }
    }

}

const getAllNotes = async () => {
    return await Note.find();
}

module.exports = {
    createNote,
    getNoteByID,
    updateById,
    deleteById,
    getAllNotes
}