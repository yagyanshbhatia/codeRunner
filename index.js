const express = require('express')
const app = express()
const port = 1212

const QUESTIONS = [{
    id : "1",
    title : "full sum",
    description : "sum of array",
    testcases : [{
        input : "[1,2,3,4,5]",
        output: "15"
    }, {
        input : "[2,3,4,5,6]",
        output : "20"
    }]
}]

const SUBMISSIONS = [{
    userId : "1",
    questionId : "1",
    answer : "15",
}, {
    userId : "2",
    questionId : "1",
    answer : "15",
}]

app.post('/signup', (req, res) => {
    // Add logic to decode body
    // Body should have username and password
    // Store username and password if doesn't exist
    // return back 200 code to client
  res.send('Hello World!')
})

app.get('/submissions', (req, res) => {
    // return list of submissions for the current user
    // randomly accept or reject
    res.send('submissions')
})

app.post('/login', (req, res) => {
    // Add logic to decode body
    // Body should have username and password
    // check if user exists or not
    // check if password matches, if yes send 200 and send back a token (any random string will do)
    // If not, send 401
    res.send('login')
})

app.get('/questions', (req, res) => {
    // Send hardcoded questions to the user.
    res.send('questions')  
})

app.get('/submit', (req, res) => {
    // parse body to make sure current user provides username and password
    // append submission to the current user's submissions
    res.send('questions')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})