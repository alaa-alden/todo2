import mongoose from 'mongoose'
const todoSchema =new mongoose.Schema({
    task:String,
})
const todo =mongoose.model('todo',todoSchema,'todos')
export default todo