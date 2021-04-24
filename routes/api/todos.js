const express = require('express');
const router = express.Router();
const passport = require('passport');

const Todo = require('../../models/Todo');
const validateTodoInput = require('../../validation/todo');

// router.get("/test", (req, res) => res.json({ msg: "This is the todos route" }));

router.get('/user/:user_id', (req, res) => {
    Todo.find({userId: req.params.userId})
        .then(todos => res.json(todos))
        .catch(err =>
            res.status(404).json({ notodosfound: 'No todos found' }
        )
    );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const { errors, isValid } = validateTodoInput(req.body);

            if (!isValid) {
                return res.status(400).json(errors);
            }

            const newTodo = new Todo({
                userId: req.user.id,
                task: req.body.task,
                completed: req.body.completed
            });

            newTodo.save().then(todo => res.json(todo));
        }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
        (req,res) => {
            Todo.findByIdAndDelete(req.params.id)
                .then(() => res.json({ successfulDelete: "Todo task deleted"}))
                .catch((err) => res.status(400).json({ unsuccessfulDelete: "Todo task not deleted"}))
        }
);

module.exports = router;