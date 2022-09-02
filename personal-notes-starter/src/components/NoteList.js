import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes,onDelete }){
  if (notes.length === 0) {
    return (
      <p>Arsip tidak ada</p>
    )
  }

  return(
    <div className="note-app__body">
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