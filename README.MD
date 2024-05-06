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

####１．データにあるユーザーの情報を使ってログインする。<br/>
アクセストークンが生成される。
![1](https://github.com/devDHB/auth-practice/assets/133613306/d3349af9-fa4e-403b-8673-72bf553b9600)
<br/>

####２．トークンが有効するので情報を呼び出しができる。<br/>
![2](https://github.com/devDHB/auth-practice/assets/133613306/7d6c46ad-6f34-4afb-bf7c-ecb6dd33742d)
<br/>


####３．トークンが満了になって呼び出せない。<br/>
![3](https://github.com/devDHB/auth-practice/assets/133613306/6259441d-8568-4677-980e-9a665320865e)
<br/>

####４．リフレッシュトークンを作るために呼び出す。<br/>
![4](https://github.com/devDHB/auth-practice/assets/133613306/933c7eb9-721a-41e3-8c32-b5baf15b7c9e)
<br/>

####５．リフレッシュトークンを入力してまた呼び出す。<br/>
情報を確認できる。<br/>
![5](https://github.com/devDHB/auth-practice/assets/133613306/801dce2a-945c-4a3d-bf06-c78c8595c04e)
<br/>
<br/>


###ps. <br/>
passportライブラリーは準備中です。<br/>
まだdotenvの環境変数は使っていないです。<br/>


