import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes,onDelete,onArchived,keyword }){
  if (notes.length > 0) {
    notes = notes.filter((note) => {
      if (keyword === "") {
        return note;
      }
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  if (notes.length === 0) {
    return (
      <p className="notes-list__empty-message">Arsip tidak ada</p>
    )
  }

  return(
    <div className="note-app__body">
    <div className="notes-list">
      {
        notes.map((note) => (
          <NoteItem key={note.id} {...note} onDelete={onDelete} onArchived={onArchived} />
          ))
        }
    </div>
    </div>
  );
}

export default NoteList;