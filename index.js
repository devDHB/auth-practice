const express = require("express");
const jwt = require("jsonwebtoken");

app = express();

// key value
const secretText = "supersecret";

// data
const posts = [
  {
    username: "Doo",
    title: "Post 1",
  },
  {
    username: "Kim",
    title: "Post 2",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // jwt tokenを生成する payload + secretText
  // jwt.sign(HEADER, PAYLOAD, VERIFY SIGNATURE)
  const accessToken = jwt.sign(user, secretText);

  // 作ったaccessTokenを送る
  res.json({ accessToken: accessToken });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(port + "PORTで接続");
});
