describe('Single Note View', () => {
  describe('.noteHTML', () => {
    it('returns a string of HTML that represents the note model', () => {
    var newNote = new Note('Test note number 1')
    var newSingleNoteView = new SingleNoteView(newNote)
    expect(newSingleNoteView.noteHTML()).toEq('<div>Test note number 1</div>')
    })
  })
})