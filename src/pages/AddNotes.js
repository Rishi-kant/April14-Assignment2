import { useState } from 'react';

import React from 'react'
import style from "./AddNotes.module.css"
const AddNotes = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, currentNote]);
    setCurrentNote('');
  };

  const handleEdit = (index) => {
    const updatedNote = prompt('Edit note:', notes[index]);
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };
  return (
    <div className={style.container}>
      <div>
        <h1>Notes</h1>
      </div>
      <div className={style.container1}>
      <form onSubmit={handleSubmit}>
        <textarea
        value={currentNote}
        onChange={(event) => setCurrentNote(event.target.value)}
      />
      <button type="submit">Add note</button>
    </form>
    </div>
    <div>
    {notes.map((note, index) => (
      <div key={index}>
        <p>{note}</p>
        <button onClick={() => handleEdit(index)}>Edit</button>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    ))}
    </div>
  </div>
  )
}

export default AddNotes