const defaultItem = {
  list: []
}
const reducerList = (state = defaultItem, action) => {
  switch (action.type) {
    case 'set_item':
      return { ...state, list: [...state.list, action.item] }
    case "delete_item":
      state.list.splice(action.key) //  delete item by index
      return { ...state, list: state.list }
    case "update_item":
      // console.log("test"+action.item)
      state.list[action.key]=action.item
      return {...state,list:state.list}
    default:
      return state
  }
}
export default reducerList
