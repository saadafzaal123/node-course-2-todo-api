require('../task-manager/src/db/mongoose');
const User = require('../task-manager/src/models/user');

// User.findByIdAndUpdate('5c7ab09700b43437d84682b6', {age: 28}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 28});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    console.log(user);
    const count = await User.countDocuments({age});
    return count;
};

updateAgeAndCount('5c7ab09700b43437d84682b6', 28).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});