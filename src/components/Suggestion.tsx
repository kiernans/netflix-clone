import React from "react";
import Movies from "../data/data.json";
import SuggestionItem from "./SuggestionItem";

const Suggestion = () => {
  return (
    <div className="suggestions">
      {Movies.map((movie) => {
        return (
          <SuggestionItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genre={movie.genre}
          />
        );
      })}
    </div>
  );
};

export default Suggestion;
