require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62003f20c86f0161175b0cd6').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(result)
}).catch((e) =>{console.log(e)})