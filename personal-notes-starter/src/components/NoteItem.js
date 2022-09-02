import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";


function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <NoteItemContent id = {id} title={title} body={body} createdAt={createdAt} archived={archived} />
      <NoteItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </div>
  );
}

export default NoteItem;
