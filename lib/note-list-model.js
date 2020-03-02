'use strict'

function NoteList() {
  this.notes = [];
}

NoteList.prototype = (function() {
  
  function all(){
    return this.notes;
  }

  function add(text) {
    var note = new Note(text)
    this.notes.push(note);
  }

  return {
    all,
    add
  };
})();

