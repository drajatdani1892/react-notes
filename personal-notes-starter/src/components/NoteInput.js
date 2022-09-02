import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        
        //inisialisasi state
        this.state = {
            title: "",
            body: "",
        }

        //binding
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" className="note-input__title" placeholder="Tulis Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <input type="text" className="note-input__body" placeholder="Tulis note anda" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type="submit" className="note-input__action-submit">
              Simpan
            </button>
            <button type="reset" className="note-input__action-reset">
              Reset
            </button>
            </form>
        );
    }
}

export default NoteInput;