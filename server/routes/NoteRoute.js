const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/AuthMiddleware");

const noteController = require("../controller/NoteController");

router.post("/save", authenticate, noteController.saveNote);
router.get("/get", authenticate, noteController.getNote);
router.put("/update/:id", authenticate, noteController.updateNote);
router.delete("/delete/:id", authenticate, noteController.deleteNote);

module.exports = router;
