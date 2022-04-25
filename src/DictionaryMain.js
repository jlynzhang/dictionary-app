import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionaryMain.css";

export default function DictionaryMain() {
  const [keyword, setKeyword] = useState(" ");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionaryMain">
      <form onSubmit={search}>
        <div className="search-bar">
          {" "}
          <input
            type="search"
            placeholder="Search for a word, any word"
            onChange={handleKeywordChange}
          />
        </div>
      </form>
      <div className="suggested-words">
        No ideas? Try: horizon, forest, persevere, ethereal, summit...
      </div>
      <div className="container">
        <Results results={results} />
      </div>
    </div>
  );
}
