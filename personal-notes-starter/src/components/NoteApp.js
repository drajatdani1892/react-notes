import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import { useState } from "react"; 

function NoteApp(){
    const [notes, setNotes] = useState(getInitialData());

    
   function onDeleteEventHandler(id) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
      }
    
    return(
        <>
            <NoteHeader/>
            <NoteList notes={notes} onDelete={onDeleteEventHandler} />
        </>
    )
}

export default NoteApp;
