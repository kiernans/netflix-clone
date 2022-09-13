import React from "react";
import Movies from "../data/data.json";
import SuggestionItem from "./SuggestionItem";
import uniqid from "uniqid";
import "../styles/Suggestion.css";

type Props = {
  title: string;
};

const Suggestion = ({ title }: Props) => {
  const left = "<";
  const right = ">";
  const section1 = uniqid();
  const section2 = uniqid();
  const section3 = uniqid();

  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="slider">
        <section id={section1}>
          <a href={"#" + section3}>{left}</a>
          {Movies.slice(0, 5).map((movie) => {
            return (
              <SuggestionItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                image={movie.image}
              />
            );
          })}
          <a href={"#" + section2}>{right}</a>
        </section>
        <section id={section2}>
          <a href={"#" + section1}>{left}</a>
          {Movies.slice(5, 10).map((movie, index) => {
            return (
              <SuggestionItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                image={movie.image}
              />
            );
          })}
          <a href={"#" + section3}>{right}</a>
        </section>
        <section id={section3}>
          <a href={"#" + section2}>{left}</a>
          {Movies.slice(10, 15).map((movie, index) => {
            return (
              <SuggestionItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                image={movie.image}
              />
            );
          })}
          <a href={"#" + section1}>{right}</a>
        </section>
      </div>
    </>
  );
};

export default Suggestion;
