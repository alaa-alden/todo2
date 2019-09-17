import { todo } from '../../data/model'
export const delete_todo = (req, res) => {
    todo.findByIdAndDelete(req.body.key).then(() => {
        res.json({
            key: req.body.key
        })
    })

}


//// work here