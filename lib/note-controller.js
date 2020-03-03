function ChangeHTML(noteList) {
  this.noteList = noteList
}
ChangeHTML.prototype = (function() {
  
  function insertNoteList() {
    this.noteList.add('Favourite drink: seltzer')
    var noteListView = new NoteListView(this.noteList)
    document.getElementById("app").innerHTML = noteListView.html()
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
