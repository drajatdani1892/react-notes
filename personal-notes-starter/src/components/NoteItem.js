import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";


function NoteItem({ id, title, body, createdAt, archive, onDelete, onArchived }) {
  return (
    <div className="note-item">
      <NoteItemContent id = {id} title={title} body={body} createdAt={createdAt} archive={archive} />
      <NoteItemAction
        id={id}
        archive={archive}
        onDelete={onDelete}
        onArchived={onArchived}
      />
    </div>
  );
}

export default NoteItem;
