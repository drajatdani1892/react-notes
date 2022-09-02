import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({ title, body }){
        this.setState({  
                notes:[
                    ...this.state.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
        })
    }

    render() {
        return (
            <div className="note-app">
                <NoteHeader/>
                <NoteBody
                    notes={this.state.notes}
                    keyword={this.state.keyword}
                    onDelete={this.onDeleteHandler}
                    onArchived={this.onArchivedEventHandler}
                    addNote={this.onAddNoteHandler}
                    />
            </div>
        );
    }
}

export default NoteApp;
