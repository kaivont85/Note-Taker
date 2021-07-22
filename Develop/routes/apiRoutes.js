
// const uuid = require("uuid");
const router = require("express").Router();
// const db = require("../db/db.json");
const Helper = require("../db/helper")


  router.get("/notes", (req, res) => {
 Helper.getAllNotes() 
    .then((allTheNotes) => {
      return res.json(allTheNotes)
    })
    .catch((e) => {
      res.status(500).json(e)
    }) 
  })



  
  // router.post("/api/notes", (req, res) => {
    
  //   const createNote = req.body;
  //   fs.readFile("./db/db.json", "utf8", (err, data) => {
  //     if (err) throw err;
      
  //     const notes = JSON.parse(data);
  //     createNote.id = uuid.v4();  
  //     notes.push(createNote);
  //     fs.writeFile("./db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
  //       return res.json(createNote)
  //     })
  //   })
  // });


  // //deleting notes
  // router.delete("/api/notes/:id", (req, res) => {
  //   const notes2 = JSON.parse(fs.readFileSync("./db/db.json"));
  //   const delNote = notes2.filter((rmvNote) => rmvNote.id !== req.params.id);
  //   fs.writeFileSync("./db/db.json", JSON.stringify(delNote));
  //   res.json(delNote)
  // });
module.exports = router
