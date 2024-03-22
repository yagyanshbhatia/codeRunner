const express = require('express')
const app = express()
const port = 1212

app.get('/signup', (req, res) => {
  res.send('Hello World!')
})

app.get('/submissions', (req, res) => {
    res.send('submissions')
})

app.get('/login', (req, res) => {
    res.send('login')
})

app.get('/questions', (req, res) => {
    res.send('questions')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})