const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

taskSchema.pre('save', async function(next) {
    const task = this;
    
    // if(user.isModified('password')) {
    //     user.password = await bcrypt.hash(user.password, 8);
    // }
    // console.log('This is before save and update task');
    
    next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;