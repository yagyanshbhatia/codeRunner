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
    accepted : true,
    userId : "1",
    questionId : "1",
    answer : "15",
}, {
    accepted : false,
    userId : "2",
    questionId : "1",
    answer : "15",
}]

app.use(express.json())

const users = {}

app.post('/signup', (req, res) => {
    // Add logic to decode body
    const { username, password } = req.body
    // Body should have username and password
    if (!username || !password) {
        res.status(400).send('Username and Password are required')
        return
    }
    // check if username and password are not existing
    if (users[username]) {
        res.status(409).send('User already exists')
        return
    }
    // Store username and password if doesn't exist
    users[username] = password
    // return back 200 code to client
    res.status(200).send('User created successfully')
})

app.get('/submissions', (req, res) => {
    // Make sure user is authenticated
    const { token } = req.headers
    if (!token) {
        res.status(401).send('Unauthorized')
        return
    }
    // Check if token is valid
    if (token !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
        res.status(401).send('Unauthorized')
        return
    }
    // return list of submissions for the current user
    res.json(SUBMISSIONS)
})

app.post('/login', (req, res) => {
    // Add logic to decode body
    const { username, password } = req.body
    // Body should have username and password
    if (!username || !password) {
        res.status(400).send('Username and Password are required')
        return
    }
    // check if user exists or not
    if (!users[username]) {
        res.status(401).send('User does not exist')
        return
    }
    // check if password matches or not
    if (users[username] !== password) {
        res.status(401).send('Password does not match')
        return
    }
    // return back 200 code to client with a token
    res.status(200).json({ token : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' })
})

app.get('/questions', (req, res) => {
    // Make sure user is logged in
    const { token } = req.headers
    if (!token) {
        res.status(401).send('Unauthorized')
        return
    }
    // Check if token is valid
    if (token !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
        res.status(401).send('Unauthorized')
        return
    }
    // Send hardcoded questions to the user.
    res.json(QUESTIONS)
})

app.post('/submit', (req, res) => {
    // parse body to make sure current user provides username and password
    const { token } = req.headers
    if (!token) {
        res.status(401).send('Unauthorized')
        return
    }
    // Check if token is valid
    if (token !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
        res.status(401).send('Unauthorized')
        return
    }
    // Check if body has questionId and answer
    const { questionId, answer } = req.body
    if (!questionId || !answer) {
        res.status(400).send('QuestionId and Answer are required')
        return
    }
    // append submission to the current user's submissions
    SUBMISSIONS.push({
        username : '1',
        questionId,
        answer
    })
    res.send('questions')  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})