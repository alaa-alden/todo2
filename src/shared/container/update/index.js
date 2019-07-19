import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { updateItem } from '../../action'
let key;
class Update extends Component {
    constructor(props){
        super(props)
        key=this.props.match.params.id
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        thing: ""
    }
    componentDidMount(){
        this.setState({
            thing:this.props.list[key]
        })
    }
    handleChange(event){
        this.setState({thing:event.target.value})
    }
    handleSubmit(event){
        // toDo ... i have info and i want to save the update of item ,,,,,, but how 
        this.props.UpdateItem(this.state.thing,key) 
        this.props.history.push(`/`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <Link to="/">home</Link>
                <br />
                <br />
                <br />
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.thing} onChange={this.handleChange} />
                    <input type='submit' value='Click me ...'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    list:state.list.list
})
const mapDispatchToProps=dispatch=>({
    UpdateItem:(item,key)=>{
        dispatch({
            type:'update_item',item,key
        })
    }
})
export default connect(mapStateToProps
    ,mapDispatchToProps
    )(Update)
