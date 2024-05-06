# ログイン認証機能を実装する (Node.js jwt practice)

## 概要<br/>
javascript express 環境で jwt, passport ライブラリを活用してユーザーログイン機能を実装

## 必要なモジュール

- dotenv<br/>
  環境変数生成
  (他の人に情報を流出しないために)

- jsonwebtoken<br/>
  トークンを作るために使用

- cookie-parser<br/>
  クッキーをパーシングするために使用

#### npm i dotenv express jsonwebtoken nodemon cookie-parser

## 全体的な流れ<br/>
![001](https://github.com/devDHB/auth-practice/assets/133613306/c9b78dae-7bb6-4f4c-b31d-04edd4bf6797)

<br/>
<br/>

#### accesstoken<br/>
  jwt を使って作るトークン

#### refreshtoken<br/>
  セキュリティのためにトークンに有効期限を与え、期限切れになると更新できるトークン


## 実行画面
- データ<br/>
![data](https://github.com/devDHB/auth-practice/assets/133613306/637eaa44-8ebc-440f-aca2-346825a028ab)

<br/>

１．データにあるユーザーの情報を使ってログインする<br/>
![1](https://github.com/devDHB/auth-practice/assets/133613306/d3349af9-fa4e-403b-8673-72bf553b9600)


<br/>

