const fs = require('fs');
const {v4: uuidv4} = require('uuid')

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile("db/db.json", "utf8", function (error, data) {
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        const {title, text} = req.body;
        const newNote = {title, text, id: uuidv4()}
        // let uniqueID = (savedNotes.length).toString();
        // newNote.id = uniqueID;
        savedNotes.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        //console.log("Saved: ", newNote);
        res.json(savedNotes);
    });

    app.delete("/api/notes/:id", (req, res) => {
       let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        noteData =  noteData.filter(note => note.id !== req.params.id);
        console.log(noteData);
        fs.writeFileSync("db/db.json", JSON.stringify(noteData));
        res.json(noteData);
    });

};