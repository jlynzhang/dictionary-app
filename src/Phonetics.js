import React from "react";
import ReactAudioPlayer from "react-audio-player";

const Phonetics = (props) => {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetics">
        {props.phonetic.text}
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    );
  } else {
    return null;
  }
};

export default Phonetics;
