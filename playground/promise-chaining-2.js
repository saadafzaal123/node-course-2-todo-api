require('../task-manager/src/db/mongoose');
const Task = require('../task-manager/src/models/task');

// Task.findByIdAndDelete('5c7c1de385a7b54db1687e7f').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deletTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id);
    console.log(task);
    const count = await Task.countDocuments({completed});
    return count;
};

deletTaskAndCount('5c7c1de385a7b54db1687e7f', true).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});