import React from "react";

const Author = (props) => {
  return <p className="authorName">{props.src}</p>;
};

const BookImage = (props) => {
  return <img className="bookImage" src={props.src} />;
};

const BookName = (props) => {
  return <h4 className="bookName">{props.src}</h4>;
};

const Book = (props) => {
  return (
    <section className="bookContainer">
      <BookImage src={props.image} />
      <BookName src={props.bookName} />
      <Author src={props.authorName} />
    </section>
  );
};

export default Book;
