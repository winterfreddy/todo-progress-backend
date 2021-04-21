const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        task: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean
        },
        dateAdded: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

module.exports = Todo = mongoose.model('Todo', TodoSchema);