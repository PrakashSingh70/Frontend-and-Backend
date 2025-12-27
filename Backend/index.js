require(`dotenv`).config();
const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;


app.use(cors())

app.get("/", (req, res) => {
  res.send("i am root path");
});

//get a list of books
app.get("/api/books", (req, res) => {
  const Books = [
    { id: 1, title: "Sophie's World ", author: "Jostein Gaarder " },
    { id: 2, title: "Godaan ", author: "Munshi Premchand " },
    {
      id: 3,
      title: "The Story of My Experiment With Trust ",
      author: "Mahatma Gandhi ",
    },
    { id: 4, title: "Sapiens ", author: "Yuval Noah Harari " },
    { id: 5, title: "The History of Mankind ", author: "Friedrich Ratzel " },
    { id: 6, title: "The Art Of Thinking Clearly ", author: "Rolf Debelli " },
  ];
  res.send(Books)
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
