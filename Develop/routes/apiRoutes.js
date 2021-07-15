const fs = require("fs");
const uuid = require("uuid");
const express = require("express");
const router = express.Router();
const db = require("../db/db.json")

function readNotes () {
 return fs.readFile(db, "utf8")
}

  router.get("/api/notes", (req, res) => {
    // Reads db.json, returns saved notes as JSON.
    readNotes().then((allTheNotes) => {
      let notes;
      try {
        notes = [].concat(JSON.parse(allTheNotes))
      } catch(e){
        notes = []
      }
     return notes
    }).then((allTheNotes) => {
      return res.json(allTheNotes)
    })
    .catch((e) => {
      res.status(500).json(e)
    }) 
  })



  //sets up post route
  router.post("/api/notes", (req, res) => {
    //note added to db.json, note returned to user
    const createNote = req.body;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // parses the json string into a js object
      const notes = JSON.parse(data);
      createNote.id = uuid.v4(); //adding properties to object 
      notes.push(createNote);
      fs.writeFile("./db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
        return res.json(createNote)
      })
    })
  });


  //deleting notes
  router.delete("/api/notes/:id", (req, res) => {
    const notes2 = JSON.parse(fs.readFileSync("./db/db.json"));
    const delNote = notes2.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(delNote));
    res.json(delNote)
  });
module.exports = router