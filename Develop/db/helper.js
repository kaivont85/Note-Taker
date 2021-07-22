const fs = require("fs");
const path = require("path");
const { callbackify } = require("util");

class Helper {
  readNotes() {
    fs.readFileSync(path.join(__dirname, "./db.json"), function (e, notes) {
      let allTheNotes = readNotes.toString();
      let allNotesSplit = allTheNotes.split("");
    });
    callBack();
  }

  getAllNotes() {
    return this.readNotes().then((allTheNotes) => {
      let notes;
      try {
        notes = [].concat(JSON.parse(allTheNotes));
      } catch (e) {
        notes = [];
      }
      console.log(notes);
      return notes;
    });
  }
}
module.exports = new Helper();
