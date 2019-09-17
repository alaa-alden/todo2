import Axios from 'axios'
const deleteItem = (key) => {
       return (dispatch)=>{ 
               Axios.delete('/delete', {
                data: {
                        key:key
                }
        }).then((res)=>{
                dispatch({
                        type: 'delete_item',
                        key
                })
        })}

}
export default deleteItem