const fs = require("fs");
const router = require("express").router;
const store = require("../db/store");

function getNotes() {
  let data = fs.readFileSync("Develop/db/db.json", "utf8");
  let notes = JSON.parse(data);
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = "" + i;
  }
  return notes;
}

app.get("/api/notes", function (req, res) {
  notesData = getNotes();
  res.json(notesData);
});

app.post("/api/notes", function (req, res) {
  notesData.push(req.body);
  fs.writeFileSync(".Develop/db/db.json", JSON.stringify(notesData), "utf8");
  res.json(true);
});

router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
