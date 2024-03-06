const express = require('express')
const app = express()
const port = 3001;
var http = require('http');
var cors = require("cors");
app.use(cors());

http.createServer(function (request, response) {
response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
});
})
const blogData = [
    {
      image: "/images/blog1.jpg",
      title: "Fruit Pastries",
      date: "Jne 26, 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
    },
    {
      image: "/images/blog2.jpg",
      title: "New Cakes",
      date: "Jne 26, 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
    },
    {
      image: "/images/blog3.jpg",
      title: "choclate cake",
      date: "Jne 26, 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
    },
  ];


app.get('/blog', (req, res) => {

  res.send({'blog':blogData})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})