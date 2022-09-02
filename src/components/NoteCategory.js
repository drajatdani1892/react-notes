import React from "react";
import NoteList from "./NoteList";

function NotesCategory({ notes, type, keyword, onDelete, onArchived }) {
  if (type === "archived") {
    const filteredArchiveNotes = notes.filter((note) => note.archived === true);
    return (
      <NoteList
        notes={filteredArchiveNotes}
        keyword={keyword}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    );
  }
  const filteredActiveNotes = notes.filter((note) => note.archived === false);
  return (
    <NoteList
      notes={filteredActiveNotes}
      keyword={keyword}
      onDelete={onDelete}
      onArchived={onArchived}
    />
  );
}

export default NotesCategory;
