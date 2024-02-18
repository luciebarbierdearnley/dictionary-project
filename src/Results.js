import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="word-phonetic">
          <h2>{props.results.data.word}</h2>
          <h4>{props.results.data.phonetic}</h4>
        </section>
        {props.results.data.meanings.map(function (meaning, index) {
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
