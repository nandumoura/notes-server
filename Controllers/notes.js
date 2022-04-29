const notesRepository = require("../Repositories/notes.js")


const getNoteController = async (req, res) => {
    const note = await notesRepository.getNoteByID(req.params.id)
    if (note.success) {
        res.json(note.data)
    } else {
        res.status(404).send("essa nota não existe")
    }
}

const putNoteController = async (req, res) => {
    const success = await notesRepository.updateById(req.params.id, req.body.note)
    if (success) {
        res.status(201).json({
            success: true,
            note: req.body.note
        })
    } else {
        res.status(404).send("id incorreto")
    }
}
const postNoteController = (req, res) => {
    notesRepository.createNote(req.body.note)
    res.status(201).json({
        success: true,
        note: req.body.note
    })
}
const deleteNoteController = async(req, res) => {
    const deleted = await notesRepository.deleteById(req.params.id)
    if(deleted.success){
        res.status(201).json(deleted)
    }else{
        res.status(404).json(deleted)
    }
    
}

const getNotesController = async (req, res) => {
    const allNotes = await notesRepository.getAllNotes()
    res.json({ notes: allNotes })
}
module.exports = { getNoteController, putNoteController, postNoteController, deleteNoteController, getNotesController }