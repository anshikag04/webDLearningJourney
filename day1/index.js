const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('MongoDB is Connected')
        }
    })

let studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    favTeacher: {
        type: String,
        required: true,
        default: 'Chahat Sharma',
    }
})

let studentModel = mongoose.model('student', studentSchema)

app.post('/addStudent', (req, res) => {
    let { name, branch, year } = req.body
    let newStudent = new studentModel({
        name: name,
        branch: branch,
        year: year
    })
    newStudent.save().then((createdStudent) => {
        if (createdStudent) {
            res.json({ done: true, savedStudent: createdStudent })
        }
    })
})

app.get('/', (req, res) => {
    studentModel.find().then((listStudent) => {
        if (listStudent) {
            res.send({ done: true, list: listStudent })
        }
    })
})
app.post('/getStudents', (req, res) => {
    studentModel.find({ name: req.body.name }).then((result) => {
        if (result) {
            res.send({ done: true, list: result })
        }
    })
})

app.post('/updateStudentBranch', (req, res) => {
    studentModel.findOne({ name: req.body.name })
        .then((foundStudent) => {
            foundStudent.branch = req.body.branch
            foundStudent.save().then(savedStudent => {
                if (savedStudent) {
                    res.json({ done: true, updatedStudent: savedStudent })
                }
            })
        })
})


app.post('/updateStudentYear', (req, res) => {
    studentModel.findOneAndUpdate({ name: req.body.name }, { year: req.body.year }, { new: true })
        .then((updatedStudent) => {
            if (updatedStudent) {
                res.json({ done: true, newStudent: updatedStudent })
            }
        })
})
app.delete('/deleteStudent', (req, res) => {
    studentModel.deleteOne({ name: req.body.name }).then((deletedList) => {
        if (deletedList) {
            res.json({ done: true, deletedEle: deletedList })
        }
    })
})

app.listen(3000, () => {
    console.log("Server is listening!")
})