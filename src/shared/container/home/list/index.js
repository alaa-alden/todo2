import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem,fetch_todo } from '../../../action'
import { Link } from 'react-router-dom'

export class List extends Component {
    componentDidMount(){
        this.props.fetch_todo()
    }
    handleClick(key){
        this.props.delete_todo(key)
        this.forceUpdate()
    }
    PrintItems() {
        return Object.keys(this.props.list).map((val, index) =>
            <li key={index}>
                <Link to={`/update/${this.props.list[val]._id}`}>{this.props.list[val].task}</Link>
                <button onClick={() => this.handleClick(this.props.list[val]._id)} >X</button>
            </li>)
    }
    render() {   
        
        
        
        return (
            <ul>
                {this.PrintItems()}
            </ul>
        )
    }
}
const mapStateToProps = state =>    ({
        list: state.store.list
    })
const mapDispatchToProps=dispatch=>({
    fetch_todo:()=>dispatch(fetch_todo()),
    delete_todo:(key)=>dispatch(deleteItem(key))
})
export default connect(mapStateToProps, mapDispatchToProps)(List)
