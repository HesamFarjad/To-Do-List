import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    if (newNote.title && newNote.content !== "") {
      setNotes((prev) => {
        return [...prev, newNote];
      });
    }
  }

  function handleDelete(id) {
    console.log("Delete has been occured");
    setNotes((p) => {
      return p.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((i, index) => (
        <Note
          key={index}
          id={index}
          title={i.title}
          content={i.content}
          onDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}
