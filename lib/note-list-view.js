'use strict'

function NoteListView() {
}

NoteListView.prototype = (function(){

  function html(noteList) {
    
    var array = noteList.allNotes().map((note) => note.content().substring(0, 20))
    var indexedArray = array.map((note, index) => '<li><div id=' + `'${index}'` + '>' + '<a href=' + `'#note/${index}'>${note}` + '</a>' + '</div></li>')
    return '<ul>' + indexedArray.join(' ') + '</ul>'
  }

  return {
    html
  };
})();