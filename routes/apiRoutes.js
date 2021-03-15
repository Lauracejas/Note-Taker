const fs = require('fs');
const noteData = require('../db/noteData');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile("db/db.json", "utf8", function (error, data) {
            res.json(JSON.parse(data));
        });
    });

    app.post('/api/notes', (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let newNote = req.body;
        let uniqueID = (savedNotes.length).toString();
        newNote.id = uniqueID;
        savedNotes.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        //console.log("Saved: ", newNote);
        res.json(savedNotes);
    });

    app.delete("/api/notes/:id", (req, res) => {
        
    });

};