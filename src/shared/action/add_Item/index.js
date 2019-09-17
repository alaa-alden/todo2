import Axios from 'axios'
const add_item = (item) => {  
  return dispatch => Axios.post('http://localhost:8080/add_todo', { task:item }).then((res) => {
    dispatch({
      type: 'add_item',
      todo:{...res.data}
    })
  }

  )
}
  export default add_item
