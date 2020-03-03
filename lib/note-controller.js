function ChangeHTML(noteList) {
  this.noteList = noteList
}
ChangeHTML.prototype = (function() {

  function insertNoteList() {
    this.noteList.add('Favourite drink: seltzer')
    var noteListView = new NoteListView()
    document.getElementById("app").innerHTML = noteListView.html(this.noteList)
  }
  return {
    insertNoteList
  };
})();

var noteList = new NoteList()
var changeHTML = new ChangeHTML(noteList)
changeHTML.insertNoteList();

// console.log(document.getElementById("app"))
// document.getElementById("app").innerHTML = "Howdy"
