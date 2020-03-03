describe('NoteListView', () => {
  describe('.html', () => {
    it('returns a string of HTML that represents the note list model', () => {
      var newNoteList = new NoteList()
      newNoteList.add("This is test note number 1. Only the first 20 characters should be shown.")
      newNoteList.add("This is test note number 2. Only the first 20 characters should be shown.")
      var newNoteListView = new NoteListView()

      expect(newNoteListView.html(newNoteList)).toEq("<ul><li><div id='0'><a href='#note/0'>This is test note nu</a></div></li> <li><div id='1'><a href='#note/1'>This is test note nu</a></div></li></ul>")
    })
  })
})