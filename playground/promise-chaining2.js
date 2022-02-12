require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62003f20c86f0161175b0cd6').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => { console.log(e) })

const deleteTaskAndCound = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCound('61ffff48986aae540b068242').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})