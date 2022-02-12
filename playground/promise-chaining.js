require('../src/db/mongoose')
const User = require('../src/models/user')

// 61fffc929d408251f890eb21

// User.findByIdAndUpdate('61fffed74c1069538efeb87c', {
//     age:1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('62003abc21335e5eea33b75b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})