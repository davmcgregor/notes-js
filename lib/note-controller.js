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

  function listenForSubmitEvent() {
    document.getElementById('text').addEventListener("submit", function(event){
      event.preventDefault();
      createNoteFromFormEvent(event.srcElement.elements[0].value)
    });
  }

  function createNoteFromFormEvent(text) {
    this.noteList.createNote(text)
    var noteListView = new NoteListView()
    document.getElementById("app").innerHTML = noteListView.html(this.noteList)
  }

  function changeAppContent() {
    index = document.location.href.split('#note/')[1]
    if (index == undefined) {
      console.log(index)
    } else {
      note = this.noteList.notes[index]
      document.getElementById("full-note").innerHTML = note.content()
    }
  }
 
  return {
    insertNoteList,
    listenForUrlChange,
    changeAppContent,
    listenForSubmitEvent,
    createNoteFromFormEvent,
  };
})();

var noteList = new NoteList()
var updateHTML = new UpdateHTML(noteList)
updateHTML.listenForSubmitEvent();
updateHTML.listenForUrlChange();
updateHTML.insertNoteList();

// console.log(document.getElementById("app"))
// document.getElementById("app").innerHTML = "Howdy"
