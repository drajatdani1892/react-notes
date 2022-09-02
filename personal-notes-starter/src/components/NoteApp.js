import React from "react";
import NoteHeader from "./NoteHeader";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    render() {
        return (
            <div className="note-app">
                <NoteHeader/>
                <NoteList notes={this.state.notes} />
            </div>
        );
    }
}

export default NoteApp;
