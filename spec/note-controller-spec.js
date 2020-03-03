describe('Note Controller', () => {
  it('Instantates with a note list object', () => {
    var noteList = new NoteList()
    var update = new UpdateHTML(noteList)
    expect(update.noteList).isInstanceOf(NoteList)
  })
  describe('.changeAppContent', () => {
    it('listens for hashchanges and loads full note content based on the URL', () => {
      var noteList = new NoteList()
      var note = new Note('This is test note number 1')
      var note2 = new Note('This is test note number 2')
      noteList.addNote(note)
      noteList.addNote(note2)
      var update = new UpdateHTML(noteList)
      update.insertNoteList();
      update.changeAppContent()
      expect(document.getElementById("full-note").innerText).includes('This is test note nu')
    })
  })
  describe('.insertNoteList', () => {
    it('Inserts a note list into index.html', () => {
      var noteList = new NoteList()
      noteList.createNote('This is test note number 1')
      var update = new UpdateHTML(noteList)
      update.insertNoteList();
      expect(document.getElementById("app").innerHTML).includes('<ul><li><div id="0"><a href="#note/0">This is test note nu</a></div></li></ul>')
    })

    it('gives each note object a unique ID', () => {
      var noteList = new NoteList()
      noteList.createNote('This is test note number 1')
      noteList.createNote('This is test note number 2')
      var update = new UpdateHTML(noteList)
      update.insertNoteList();
      expect(document.getElementById("app").innerHTML).includes('<div id="0">')
      expect(document.getElementById("app").innerHTML).includes('<div id="1">')
    })

    it("gives each note an ID equal to it's note array index", () => {
      var noteList = new NoteList()
      var note = new Note('This is test note number 1')
      var note2 = new Note('This is test note number 2')
      noteList.addNote(note)
      noteList.addNote(note2)
      var update = new UpdateHTML(noteList)
      update.insertNoteList();
      expect(noteList.allNotes()[0].content()).toEq('This is test note number 1');
      expect(noteList.allNotes()[0].content()).includes(document.getElementById("0").innerText);
      expect(noteList.allNotes()[1].content()).toEq('This is test note number 2');
      expect(noteList.allNotes()[1].content()).includes(document.getElementById("1").innerText);
    })

    it("gives each note a unique URL that matches it's ID", () => {
      var noteList = new NoteList()
      var note = new Note('This is test note number 1')
      var note2 = new Note('This is test note number 2')
      noteList.addNote(note)
      noteList.addNote(note2)
      var update = new UpdateHTML(noteList)
      update.insertNoteList();
      expect(document.getElementById("0").innerHTML).includes('<a href="#note/0">')
      expect(document.getElementById("1").innerHTML).includes('<a href="#note/1">')
    })

  })
})