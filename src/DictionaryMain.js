import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionaryMain.css";

export default function DictionaryMain(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="DictionaryMain">
        <form onSubmit={handleSubmit}>
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
  } else {
    load();
    return "Loading...";
  }
}
