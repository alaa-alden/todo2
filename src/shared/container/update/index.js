import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Update extends Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id
        console.log(this.props.list)
        let thing=this.props.list.find(obj=>obj._id==id)
        // let thing='ala'
        this.state = {
            thing: thing || ""
        }
    }
    handleChange=event=>this.setState({ thing: event.target.value })
    
    handleSubmit=event=>{
        event.preventDefault()
        const key=this.props.match.params.id
        // toDo ... i have info and i want to save the update of item ,,,,,, but how 
        this.props.UpdateItem(this.state.thing, key)
        this.props.history.push(`/`)
    }
    render() {
        console.log(this.props.list)
        return (
            <div>
                <Link to="/">home</Link>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.thing} onChange={this.handleChange} />
                    <input type='submit' value='Click me ...' />
                </form>
            </div>
        )
    }
}
const mapStateToProps = state =>({ list:state.store.list})
const mapDispatchToProps = dispatch => ({
    UpdateItem: (item, key) => {
        dispatch({
            type: 'update_item', item, key
        })
    }
})
export default connect(mapStateToProps
    , mapDispatchToProps
)(Update)
