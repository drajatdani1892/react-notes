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
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event){
            event.preventDefault();
            this.props.addNote(this.state);
    }

    onResetEventHandler(event) {
        event.preventDefault();
        this.setState({
                title: "",
                body: "",
        });
    }

    render() {
        return (
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form onSubmit={this.onSubmitEventHandler} onReset={this.onResetEventHandler}>
                <input type="text" className="note-input__title" placeholder="Tulis Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <textarea type="text" className="note-input__body" placeholder="Tulis note anda" value={this.state.body} onChange={this.onBodyChangeEventHandler}>
                </textarea>
            <div className="note-item__action">
            <button type="submit" className="note-input__submit-button">
              Simpan
            </button>
            <button type="reset" className="note-input__reset-button">
              Reset
            </button>
          </div>
            </form>
        </div>
        );
    }
}

export default NoteInput;