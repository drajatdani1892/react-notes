import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>M Drajat Ramdhani</h1>
      <NoteSearch onSearch={onSearch} />
    </div>
  );
}

export default NoteHeader;