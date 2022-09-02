import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            keyword: "",
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchivedHandler= this.onArchivedHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        
    
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

    onArchivedHandler(id) {
        const newNotes = this.state.notes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          }
          return note;
        });
        this.setState({ notes: newNotes });
      }

      onSearchHandler = (keyword) => {
        this.setState({ keyword });
      }

    render() {
        return (
            <div className="note-app">
                <NoteHeader onSearch={this.onSearchHandler}/>
                <NoteBody
                    notes={this.state.notes}
                    keyword={this.state.keyword}
                    onDelete={this.onDeleteHandler}
                    onArchived={this.onArchivedHandler}
                    addNote={this.onAddNoteHandler}
                    />
            </div>
        );
    }
}

export default NoteApp;
