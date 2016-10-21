var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send(`
    <body bgcolor = "#FF00FF">
      <a href="/">Index</a>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      <a href="/page3">page3</a>
      <a href="/page4">page4</a>
      <h1>Index นะจ๊ะ</h1>
    <body>`)
})

app.get('/page1', function (req, res) {
  res.send(`
    <body bgcolor = "#FFD700">
      <a href="/">Index</a>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      <a href="/page3">page3</a>
      <a href="/page4">page4</a>
      <h1>Page1 นะจ๊ะ</h1>
    <body>`)
})

app.get('/page2', function (req, res) {
  res.send(`
    <body bgcolor = "#7CFC00">
      <a href="/">Index</a>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      <a href="/page3">page3</a>
      <a href="/page4">page4</a>
      <h1>Page2 นะจ๊ะ</h1>
    <body>`)
})

app.get('/page3', function (req, res) {
  res.send(`
    <body bgcolor = "#87CEFA">
      <a href="/">Index</a>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      <a href="/page3">page3</a>
      <a href="/page4">page4</a>
      <h1>Page3 นะจ๊ะ</h1>
    <body>`)
})

app.get('/page4', function (req, res) {
  res.send(`
    <body bgcolor = "#FFA500">
      <a href="/">Index</a>
      <a href="/page1">page1</a>
      <a href="/page2">page2</a>
      <a href="/page3">page3</a>
      <a href="/page4">page4</a>
      <h1>Page4 นะจ๊ะ</h1>
    <body>`)
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
