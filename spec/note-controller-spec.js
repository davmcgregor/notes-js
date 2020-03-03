describe('Note Controller', () => {

  it('Instantiates with a note list object', () => {
    expect(updateHTML.noteList).isInstanceOf(NoteList)
  })

  it('Instantates with a empty note list object', () => {
    notes = updateHTML.noteList.notes
    expect(notes).toBeEmpty(notes)
  })

  describe('.insertNoteList', () => {
    it('Inserts a note list into index.html', () => {
      noteList.createNote('This is test note number 1')
      noteList.createNote('This is test note number 2')
      updateHTML.insertNoteList();
      expect(document.getElementById("app").innerHTML).includes('<ul><li><div id="0"><a href="#note/0">This is test note nu</a></div></li> <li><div id="1"><a href="#note/1">This is test note nu</a></div></li></ul>')
    })

    it('gives each note object a unique ID', () => {
      appObject = document.getElementById("app").innerHTML
      expect(appObject).includes('This is test note nu')
      expect(appObject).includes('<div id="0">')
    })

    it("gives each note an ID equal to its note array index", () => {
      expect(noteList.allNotes()[0].content()).toEq('This is test note number 1');
      expect(noteList.allNotes()[0].content()).includes(document.getElementById("0").innerText);
      expect(noteList.allNotes()[1].content()).toEq('This is test note number 2');
      expect(noteList.allNotes()[1].content()).includes(document.getElementById("1").innerText);
    })

    it("gives each note a unique URL that matches it's ID", () => {
      expect(document.getElementById("0").innerHTML).includes('<a href="#note/0">')
      expect(document.getElementById("1").innerHTML).includes('<a href="#note/1">')
    })
  })

  describe('.createNoteFromFormEvent', () => {
    updateHTML.createNoteFromFormEvent('This is my event note')

    it('creates a new note with the text from the submit event', () => {
      expect(updateHTML.noteList.notes[0]).isInstanceOf(Note)
    })
    it('refreshes the noteList, displaying the new note', () => {
      expect(document.getElementById("app").innerHTML).includes('This is my event not')
    })
  })

  describe('.changeAppContent', () => {
    it('loads full note content based on the URL', () => {
      updateHTML.changeAppContent();
      expect(document.getElementById("full-note").innerText).includes('This is test note number 1')
    })
  })

})