import { todo } from "../../../data/model"
const add_todo = (req, res) => {
    todo.create({ task: req.body.task }, (err,todo) => {
        res.json({data:todo})
    })
}
export {
    add_todo
}