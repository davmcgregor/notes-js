describe('Note Controller', () => {
  it('Instantates with a note list object', () => {
    var noteList = new NoteList()
    var update = new ChangeHTML(noteList)
    expect(update.noteList).isInstanceOf(NoteList)
  })

  describe('.insertNoteList', () => {
    it('Inserts a note list into index.html', () => {
      var noteList = new NoteList()
      var update = new ChangeHTML(noteList)
      update.insertNoteList();
      expect(document.getElementById("app").innerHTML).includes('<ul><li><div>Favourite drink: seltzer</div></li></ul>')
    })
  })
})