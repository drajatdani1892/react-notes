import React from "react";

function NoteSearch ({ onSearch }) {
  return (
    <div className="note-app__search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default NoteSearch;