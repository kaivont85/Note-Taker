
const router = require("express").Router();
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



  
  router.post("/notes", (req, res) => {
    Helper.singleNote(req.body)
    .then((note) => {
      console.log(note)
      res.json(note)
    })

    .catch((e) => {
      res.status(500).json(e)
    })
   
  });


  // //deleting notes
  // router.delete("/api/notes/:id", (req, res) => {
  //   const notes2 = JSON.parse(fs.readFileSync("./db/db.json"));
  //   const delNote = notes2.filter((rmvNote) => rmvNote.id !== req.params.id);
  //   fs.writeFileSync("./db/db.json", JSON.stringify(delNote));
  //   res.json(delNote)
  // });
module.exports = router
