
const express = require("express");
const path = require('path');

const app = express();
const port = 8000;

// 追加: Reactのビルド成果物を提供する
const rootPath = path.join(__dirname, '../');
app.use(express.static(path.join(rootPath, 'frontend/build')));

app.get("/api", (req, res) => {
    res.json([
      {
        id:1,
        name:"りんご",
        price:200,
        image:"https://source.unsplash.com/gDPaDDy6_WE",
      },
      {
        id:2,
        name:"バナナ",
        price:300,
        image:"https://source.unsplash.com/zrF6ACPLhPM",
      },
      {
        id:3,
        name:"みかん",
        price:"150",
        image:"https://source.unsplash.com/bogrLtEaJ2Q",
      },
      {
        id:4,
        name:"メロン",
        price:"2000",
        image:"https://source.unsplash.com/8keUtGmy0xo",
      },
    ]);
  });

// 追加: それ以外のGETリクエストでindex.htmlを返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});
  

const actualPort = process.env.PORT || port;
app.listen(actualPort, () => {
  console.log(`port ${actualPort} でサーバー起動中`);
});