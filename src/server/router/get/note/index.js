import { todo } from '../../../data/model'
const fetch_todo=(req,res)=>{
    todo.find({},'task',(error,todos)=>{
        res.json({...todos})
    })  
}
export default fetch_todo
