describe('Single Note View', () => {
  describe('.noteHTML', () => {
    it('returns a string of HTML without tags', () => {
    var newNote = new Note('Test note number 1')
    var newSingleNoteView = new SingleNoteView(newNote)
    expect(newSingleNoteView.noteHTML()).toEq('Test note number 1')
    })
  })
})