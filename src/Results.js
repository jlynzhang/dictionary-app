import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="row">
            <div className="col-6">
              <h2 className="word">{props.results.word}</h2>
            </div>
            <div className="col-6">
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
