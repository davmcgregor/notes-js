describe('NoteListView', () => {
  describe('.html', () => {
    it('returns a string of HTML that represents the note list model', () => {
      var newNoteList = new NoteList()
      newNoteList.add("This is test note number 1. Only the first 20 characters should be shown.")
      newNoteList.add("This is test note number 2. Only the first 20 characters should be shown.")
      var newNoteListView = new NoteListView(newNoteList)

      expect(newNoteListView.html(newNoteList)).toEq("<ul><li><div>This is test note nu</div></li><li><div>This is test note nu</div></li></ul>")
    })
  })
})