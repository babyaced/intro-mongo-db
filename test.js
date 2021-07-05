const mongoose = require('mongoose')

const connect = () =>{
    return mongoose.connect('mongodb://localhost:27017/')
}

const student = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    faveFoods: [{type: String}],
    info:{
        school: {
            type: String
        },
        showSize:{
            type: Number
        }
    }
})

const Student = mongoose.model('student', student)

connect()
.then(async connection => {
    const student = await Student.create({firstName: 'Tim'})
    console.log(student)
})
.catch(e => console.error(e))