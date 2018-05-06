import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./NotesApp.css";

import NoteEditor from "./NoteEditor";
import NotesGrid from "./NotesGrid";

@hot(module)
class NotesApp extends Component {
  state = {
    notes: []
  };

  componentDidMount = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      this.setState({ notes: savedNotes });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.notes !== this.state.notes) {
      this.saveToLocalStorage();
    }
  };

  handleNoteAdd = newNote => {
    this.setState({
      notes: [newNote, ...this.state.notes]
    });
  };

  handleNoteDelete = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  };

  saveToLocalStorage = () => {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  };

  render() {
    const { notes } = this.state;
    return (
      <div className="app">
        <h2 className="app__header">Notes App</h2>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid onNoteDelete={this.handleNoteDelete} notes={notes} />
      </div>
    );
  }
}

export default NotesApp;
