'use strict'

function NoteList() {
  this.notes = [];
}

NoteList.prototype = (function() {
  
  function allNotes(){
    return this.notes;
  }

  function createNote(text) {
    var note = new Note(text)
    this.notes.push(note);
  }

  function addNote(note) {
    this.notes.push(note)
  }

  return {
    allNotes,
    createNote,
    addNote
  };
})();

