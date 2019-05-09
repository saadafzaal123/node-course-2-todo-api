const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// const me = new User({
//     name: '   Jason',
//     password: 'Password123', 
//     email: 'jason@gmail.com    ',
//     age: 27
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error: ', error);
// });

// const task = new Task({
//     description: 'Learn the Mongoose Library', 
//     completed: false
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error: ', error);
// });