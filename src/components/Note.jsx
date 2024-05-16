import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Fab from "@mui/material/Fab";

export default function Note(props) {
  function hDelete() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={hDelete}>
        <DeleteRoundedIcon />
      </Fab>
    </div>
  );
}
