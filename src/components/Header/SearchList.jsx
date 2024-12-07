import React from "react";
import "./Header.css";

function SearchList({ results }) {
  // Function to highlight matching characters in the result name
  const highlightMatchingLetters = (text) => {
    return text.split("").map((char, index) => {
      // Highlight vowels in yellow and consonants in blue
      const isVowel = "aeiou".includes(char.toLowerCase());
      return (
        <span
          key={index}
          style={{
            color: isVowel ? "blue" : "black",
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <>
      <div className="results-list">
        {results.map((result, id) => (
          <div className="search-result" key={id}>
            {highlightMatchingLetters(result.name)}
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchList;