const fs = require("fs");
const router = require("express").router;
const store = require("../db/store");

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
  res.sendFile(path.join(__dirname, "notes.html"));
});

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
