import React from "react";
import Book from "./Book";
const BookList = () => {
  const bookListDetail = [
    {
      id: 1,
      imageLink:
        "https://m.media-amazon.com/images/I/51rs7rGnciL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      bookName: "Iron Flame (The Empyrean, 2)",
      authorName: "Rebecca Yarros",
    },
    {
      id: 2,
      imageLink:
        "https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg",
      bookName: "The Covenant of Water",
      authorName: "Abraham Verghese",
    },
  ];

  const Books = bookListDetail.map((book) => {
    return (
      <Book
        key={book.id}
        image={book.imageLink}
        bookName={book.bookName}
        authorName={book.authorName}
      />
    );
  });

  //console.log(Books);

  return <div className="book-list">{Books}</div>;
};

export default BookList;
