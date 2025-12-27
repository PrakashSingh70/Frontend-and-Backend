import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books")
      .then((Response) => {
        //console.log(Response)
        setBooks(Response.data);
      })
      .catch((err) => {
        console.log("some error in axios ", err);
      });
  });

  return (
    <>
      <h2 style={{ background: "blue", marginTop: "auto" }}>
        These Books Read for All Human{" "}
      </h2>
      {/* <span><p style={{border:"2px solid"}}>Books: {Books.length}</p> </span> */}
      <span style={{ border: "2px solid", padding: "5px" }}>
        Books: {Books.length}
      </span>

      {Books.map((Book, index) => (
        <div
          key={Book.id}
          style={{
            border: "2px solid black",
            padding: "2px",
            margin: "5px",
            backgroundColor: "orange",
          }}
        >
          <h4 style={{ color: "black" }}> Tittle : {Book.title}</h4>
          <p>Author: {Book.author}</p>
        </div>
      ))}
    </>
  );
}

export default App;
