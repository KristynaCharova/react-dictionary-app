import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="nonrefer">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}
