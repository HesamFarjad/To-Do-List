import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [contitle, setContitle] = useState({ title: "", content: "" });
  const [txtClicked, setTxtClicked] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setContitle((previous) => {
      return { ...previous, [name]: value };
    });
  }

  function handleClick(e) {
    props.onAdd(contitle);
    e.preventDefault();
    setContitle({ title: "", content: "" });
  }

  function handleTextAreaClick() {
    setTxtClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {txtClicked && (
          <input
            name="title"
            placeholder="Title"
            value={contitle.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          onClick={handleTextAreaClick}
          placeholder="Take a note..."
          rows={txtClicked ? "3" : "1"}
          value={contitle.content}
          onChange={handleChange}
        />
        {contitle.title && contitle.content !== "" && (
          <Zoom in="true">
            <Fab onClick={handleClick}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}
