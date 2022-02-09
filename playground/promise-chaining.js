require('../src/db/mongoose')
const User = require('../src/models/user')

// 61fffc929d408251f890eb21

User.findByIdAndUpdate('61fffed74c1069538efeb87c', {
    age:1
}).then((user) => {
    console.log(user)
    return User.countDocuments({age:1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

