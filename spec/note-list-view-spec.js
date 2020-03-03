describe('NoteListView', () => {
  describe('.html', () => {
    it('returns a string of HTML that represents the note list model', () => {
      var newNoteList = new NoteList()
      newNoteList.add("Test note number 1")
      newNoteList.add("Test note number 2")
      var newNoteListView = new NoteListView(newNoteList)

      expect(newNoteListView.html(newNoteList)).toEq("<ul><li><div>Test note number 1</div></li><li><div>Test note number 2</div></li></ul>")
    })
  })
})