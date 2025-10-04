const Note = require("../model/NoteSchema");

const saveNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new Note({ title, description, userId: req.user.id });
    await newNote.save();
    return res
      .status(201)
      .json({ success: true, message: "Note saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getNote = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    return res.status(200).json({ success: true, notes });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't retrive notes" });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updateNote = await Note.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ success: true, updateNote });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't update notes" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    return res.status(200).json({ success: true, deleteNote });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Can't delete notes" });
  }
};

module.exports = { saveNote, getNote, updateNote, deleteNote };
