import React from "react";
import "../styles/SuggestionItem.css";

type SuggestionItemProps = {
  id: number;
  title: string;
  genre: string[];
};

const SuggestionItem = ({ id, title, genre }: SuggestionItemProps) => {
  return (
    <div className="item">
      {id}
      {title}
      {genre}
    </div>
  );
};

export default SuggestionItem;
