import React from "react";
import "../styles/SuggestionItem.css";

type SuggestionItemProps = {
  id: number;
  title: string;
  genre: string[];
  image: string;
};

const SuggestionItem = ({ id, title, genre, image }: SuggestionItemProps) => {
  return (
    <div className="item">
      <img src={require(`../assets/images/${image}`)} alt="" />
    </div>
  );
};

export default SuggestionItem;
