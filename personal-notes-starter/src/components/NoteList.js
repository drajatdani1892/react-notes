import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes,onDelete }){
  return(
    <div className="note-app__body">
       <h2>Catatan Aktif</h2>
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem key={note.id} {...note} onDelete={onDelete} />
          ))
        }
    </div>
    </div>
  );
}

export default NoteList;