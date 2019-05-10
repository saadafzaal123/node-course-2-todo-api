const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled');
//     }else{
//         next();
//     }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '1 seconds'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// }

// myFunction();

// const bcrypt = require('bcryptjs');

// const myFunction = async () => {
//     const password = 'Red12345';
//     const hashPassword = await bcrypt.hash(password, 8);
//     console.log(password);
//     console.log(hashPassword);

//     const isMatch = await bcrypt.compare('Red12345', hashPassword);
//     console.log(isMatch);
// }

// myFunction();