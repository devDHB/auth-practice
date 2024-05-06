# ログイン認証機能を実装する (Node.js jwt practice)

概要
javascript express 環境で jwt, passport ライブラリを活用してユーザーログイン機能を実装

### 必要なモジュール

- dotenv
  環境変数生成
  (他の人に情報を流出しないために)

- jsonwebtoken
  トークンを作るために使用

- cookie-parser
  쿠키를 파싱하기 위한 모듈
  クッキーをパーシングするために使用

npm i dotenv express jsonwebtoken nodemon cookie-parser

- accesstoken
  jwt を使って作るトークン

- refreshtoken
  セキュリティのためにトークンに有効期限を与え、期限切れになると更新できるトークン
