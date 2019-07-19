import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../../../action'
import { Link } from 'react-router-dom'
export class List extends Component {
    handleClick(key){
        this.props.DI(key)
        this.forceUpdate()
    }
    PrintItems() {
        return this.props.list.map((item, key) =>
            <li key={key}>
                <Link to={`/update/${key}`}>{item}</Link>
                <button onClick={()=>this.handleClick(key)} >X</button>
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
        list: state.list.list
    })
const mapDispatchToProps = dispatch => ({
    DI: key => {
        dispatch(
            deleteItem(key)
        )
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List)
