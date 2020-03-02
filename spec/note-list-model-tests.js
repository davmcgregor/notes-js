describe('NoteList', () => {
  it('stores an array of note models', () => {
    var newNoteList = new NoteList
    expect((newNoteList.notes).length).toEq(0)
  })

  it('creates and stores a new single note model', () => {
    var newNoteList = new NoteList
    newNoteList.add("Test note number 1")
    expect(newNoteList.notes[0]).isInstanceOf(Note)
    expect(newNoteList.notes[0].content()).toEq("Test note number 1")
  })

  it('return all the note models stored in the array', () => {
    var newNoteList = new NoteList
    newNoteList.add("Test note number 1")
    newNoteList.add("Test note number 2")
    expect(newNoteList.all()[0]).isInstanceOf(Note)
    expect(newNoteList.all()[1]).isInstanceOf(Note)
  })
})