const fs = require("fs");
const path = require("path");
const util = require("util");

const readIt = util.promisify(fs.readFile);
const writeIt = util.promisify(fs.writeFile)

class Helper {
  readNotes() {
   return readIt("db/db.json", "utf8")
  }

  writeNotes(notes) {
    console.log("hit", notes)
    return writeIt("db/db.json", JSON.stringify(notes))
  }

  getAllNotes() {
    return this.readNotes().then((allTheNotes) => {
      let notes;
      try {
        notes = [].concat(JSON.parse(allTheNotes));
      } catch (e) {
        notes = [];
      }

      return notes;
    });
  }

  singleNote(note) {
    const {title, text} = note

    if(!title || !text) {
      alert("Please add title and text")
    }

    const newId = Math.floor(Math.random() * 100000000)
    const newNote = {title, text, id:newId }
    console.log("not", note)
   return this.getAllNotes()
   .then((notes) => {
    
     [...notes, newNote]
     console.log("Hi", newNote) 
   }) 
   .then((addedNotes) => {
     this.writeNotes(addedNotes)
   }).then(() => {
     newNote
   })
  }
}
module.exports = new Helper();
