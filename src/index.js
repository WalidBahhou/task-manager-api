const app = require('./app')
const port = process.env.PORT

app.listen(port, () => console.log('Server is up on port', port))


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     const task = await Task.findById('610186594c73cd3334fa098b')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('610184dbe5ccc51890b6b4f6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()