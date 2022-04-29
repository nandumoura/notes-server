const express = require('express')
const router = express.Router()
const {
    getNoteController,
    putNoteController,
    postNoteController,
    deleteNoteController,
    getNotesController
} = require("../Controllers/notes.js")


router
    .get('/note/:id', getNoteController)
    .post("/note",postNoteController)
    .put("/note/:id",putNoteController)
    .delete("/note/:id",deleteNoteController)

    router.get("/notes",getNotesController)

    module.exports = router;