const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean
        },
        dateAdded: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

module.exports = Todo = mongoose.model('Todo', TodoSchema);