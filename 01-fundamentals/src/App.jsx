import "./main.css";
import BookList from "./components/BookList";
import React from "react";
import data from "./data";
const App = () => {
  data();
  return (
    <React.StrictMode>
      <BookList />
    </React.StrictMode>
  );
};

export default App;
