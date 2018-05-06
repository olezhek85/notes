import React, { Component } from "react";

import "./NoteEditor.css";

export default class NotesEditor extends Component {
  state = {
    text: ""
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleNoteAdd = () => {
    const newNote = {
      text: this.state.text,
      color: "yellow",
      id: Date.now()
    };

    this.props.onNoteAdd(newNote);
    this.resetState();
  };

  resetState = () => {
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="editor">
        <textarea
          rows={5}
          placeholder="Enter your note here..."
          className="editor__textarea"
          value={text}
          onChange={this.handleTextChange}
        />
        <button
          className="editor__button"
          disabled={!text}
          onClick={this.handleNoteAdd}
        >
          Add
        </button>
      </div>
    );
  }
}
