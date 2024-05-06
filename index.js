const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");

app = express();

// key value
const secretText = "superSecret";
const refreshSecretText = "supersuperSecret";

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

// dbがなくて配列利用
let refreshTokens = [];

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // jwt tokenを生成する payload + secretText
  // jwt.sign(HEADER, PAYLOAD, VERIFY SIGNATURE)
  // 有効期限追加（30秒）
  const accessToken = jwt.sign(user, secretText, { expiresIn: "30s" });

  // jwtを使ってrefresh token生成
  const refreshToken = jwt.sign(user, refreshSecretText, {
    expiresIn: "1h",
  });

  refreshTokens.push(refreshToken);

  // refresh tokenをcookieに入れる
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000,
  });

  // 作ったaccessTokenを送る
  res.json({ accessToken: accessToken });
});

// authMiddlewareを追加して認証されたユーザーに権限をあげる
app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

function authMiddleware(req, res, next) {
  // tokenをrequest headersから持ち込み
  const authHeader = req.headers["authorization"];
  // Bearer 持ち込み
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  // tokenが有効なのか確認
  jwt.verify(token, secretText, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/refresh", (req, res) => {
  // cookies持ち込み
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    return res.sendStatus(403);
  }

  console.log(cookies);

  const refreshToken = cookies.jwt;
  // refresh tokenがDB（refreshToken<--配列）にあるのか確認
  if (!refreshToken.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  // tokenが有効なtokenなのか確認
  jwt.verify(refreshToken, refreshSecretText, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    // access token 生成
    const accessToken = jwt.sign({ name: user.name }, secretText, {
      expiresIn: "30s",
    });
    res.json({ accessToken: accessToken });
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(port + "PORTで接続");
});
