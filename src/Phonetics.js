import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

const Phonetics = (props) => {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <span className="phonetic-text"> {props.phonetic.text} </span>
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    );
  } else {
    return null;
  }
};

export default Phonetics;
