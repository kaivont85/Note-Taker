const fs = require("fs");
const util = require("util");


const readIt = util.promisify(fs.readFile);
const writeIt = util.promisify(fs.writeFile)

class Helper {
  readNotes() {
   return readIt("db/db.json", "utf8")
  }

  writeNotes(notes) {
    return writeIt("db/db.json", JSON.stringify(notes))
  }

  getNotes() {
    return this.readNotes().then((notes) => {
      let allTheNotes;
      try {
        allTheNotes = [].concat(JSON.parse(notes));
      } catch (e) {
        allTheNotes = [];
      }

      return allTheNotes;
    });
  } 


  singleNote(note) {
    const {title, text} = note

    if(!title || !text) {
      alert("Please add title and text")
    }

    const newId = Math.floor(Math.random() * 100000000)
    const singleNote = {title, text, id:newId }
   return this.getNotes()
   .then((allTheNotes) => 
    
     [...allTheNotes, singleNote]
   ) 
   .then((addedNotes) => 
     this.writeNotes(addedNotes)
   ).then(() => 
   singleNote
   ); 
  }

  removeNote(id) {
    return this.getNotes() 
    .then((notes) => {
     
      let nNotes = []
   for (let index = 0; index < notes.length; index++) {
    console.log(parseInt(notes[index].id), parseInt(id))
    if(parseInt(notes[index].id) !== parseInt(id)) {
      console.log("hit")
      nNotes.push(notes[index])
    }
   }    
   console.log(nNotes)
   return this.writeNotes(nNotes)
      // .then((noteList) => {
      //   console.log(noteList)
      //  return this.writeNotes(noteList)
      // })
      
  }) 
}


} 

module.exports = new Helper();
