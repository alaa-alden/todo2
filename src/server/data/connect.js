import mongoose from 'mongoose'
const connect = () => {

    //connect with database
    mongoose.connect("mongodb://localhost:27017/note", { useNewUrlParser: true })
}
export default connect