function UpdateHTML(noteList) {
  this.noteList = noteList
  this.noteListView = new NoteListView()

}
UpdateHTML.prototype = (function() {
  function insertNoteList() {
    document.getElementById("app").innerHTML = this.noteListView.html(this.noteList)
  }

  function listenForUrlChange() {
    window.addEventListener("hashchange", changeAppContent);
  }

  function changeAppContent() {
    note = this.noteList.notes[window.location.hash.split('#note/')[1]]
    var newSingleNoteView = new SingleNoteView(note)
    document.getElementById("full-note").innerHTML = newSingleNoteView.noteHTML()
   }
 
  return {
    insertNoteList,
    listenForUrlChange,
    changeAppContent
  };
})();

var noteList = new NoteList()
noteList.createNote('Test note #1')
noteList.createNote('Test note #2')
var updateHTML = new UpdateHTML(noteList)
updateHTML.insertNoteList();
updateHTML.listenForUrlChange();

// console.log(document.getElementById("app"))
// document.getElementById("app").innerHTML = "Howdy"
