const router = require("express").Router();
const Helper = require("../db/helper")


  router.get("/notes", (req, res) => {
 Helper.getNotes() 
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

router.delete("/notes/:id", (req, res) => {
  Helper.removeNote(req.params.id)
  .then(() => 
    res.json({ok: true})
  )
  .catch((e) => 
    res.status(500).json(e)
  )
})


 
module.exports = router
