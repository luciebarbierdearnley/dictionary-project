import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {}

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiKey = "d2fcf0to3278b4e6ab12b4d9a002d5f2";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="text" onChange={keywordChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
