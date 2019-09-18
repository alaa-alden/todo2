import Axios from "axios"

const fetch_todo = () => {
    console.log('fetch_data now')
    return (dispatch) => Axios.get('/fetch_todo').then(res => {
        // let data=new Map(JSON.parse(res.data))
        dispatch({ type: 'fetch_todo', data:res.data})
    }
    )
}
export default fetch_todo