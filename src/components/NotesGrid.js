import React from "react";
import Masonry from "react-masonry-component";

import "./NotesGrid.css";
import Note from "./Note";

const masonryOptions = {
  columnWidth: 248,
  gutter: 10,
  fitWidth: true
};

const NotesGrid = props => {
  const { notes, onNoteDelete } = props;
  return (
    <Masonry className="grid" options={masonryOptions}>
      {notes.map(({ id, color, text }) => (
        <Note key={id} id={id} color={color} onDelete={onNoteDelete}>
          {text}
        </Note>
      ))}
    </Masonry>
  );
};

export default NotesGrid;
