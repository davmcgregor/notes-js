describe('NoteList', () => {
  describe('.allNotes', () => {
    it('Shows all  notes', () => {
      var noteList = new NoteList()
      noteList.createNote("This is test note number 1")
      expect(noteList.allNotes()[0]).isInstanceOf(Note)
    })
  })
  describe('.createNote', () => {
    it("creates a note object", () => {
      var noteList = new NoteList()
      noteList.createNote("This is test note number 1")
      note = noteList.notes[0]
      expect(note).isInstanceOf(Note)
      expect(note.content()).toEq("This is test note number 1")
    })
    it("adds it to the note list", () => {
      var noteList = new NoteList()
      noteList.createNote("This is test note number 1")
      expect(noteList.notes[0]).isInstanceOf(Note)
      expect(noteList.notes[0].content()).toEq("This is test note number 1")
    })
  })
  describe('.addNote', () => {
    it('adds a note object to the note list', () => {
      var noteList = new NoteList()
      var note = new Note("This is test note number 1")
      noteList.addNote(note)
      expect(noteList.allNotes()).includes(note)
    })
  })
})