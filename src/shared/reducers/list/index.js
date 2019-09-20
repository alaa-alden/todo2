const defaultItem = {
  list: []
}
const reducerList = (state = defaultItem, action) => {
  let handle=new Array()
  switch (action.type) {
    //  fetch'reducer when whole todos comes from server
    case 'fetch_todo':
      return {...state,list:action.data}
    // ! add reduce when you send todo to server then save on database then save on redux
    case 'add_item':
      handle=Object.values(state.list)
      handle.push(action.todo.data)
      return { ...state, list: handle }
    // delete's reduce 
    case "delete_item":
      for(let key in state.list){
        // if the key equal target then delete from redux's list 
        if(state.list[key]._id===action.key) continue;
        handle.push(state.list[key])
      }
      return { ...state, list:{...handle} }
      // work here
    case "update_item":
      state.list[action.key]=action.item
      const data={...state}
      data.list[action.key]=action.item
      return {state:data,list:state.list}
      
    default:
      return state
  }
}
export default reducerList
