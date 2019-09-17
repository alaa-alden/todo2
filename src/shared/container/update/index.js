import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { fetch_todo } from '../../action'
// import { updateItem } from '../../action'
let key;
class Update extends Component {
    constructor(props) {
        super(props)
        key = this.props.match.params.id
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.props.fetch_todo()
    }
    state = {
        thing: ""
    }
    componentDidMount() {
        console.log(this.props.list)
        for (let i in this.props.list) {
            if (this.props.list[i]._id == key) {
                this.setState({
                    thing: this.props.list[i].task
                })
                break;
            }
        }
    }
    handleChange(event) {
        this.setState({ thing: event.target.value })
    }
    handleSubmit(event) {
        // toDo ... i have info and i want to save the update of item ,,,,,, but how 
        this.props.UpdateItem(this.state.thing, key)
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.thing} onChange={this.handleChange} />
                    <input type='submit' value='Click me ...' />
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    list: state.store.list
})
const mapDispatchToProps = dispatch => ({
    // fetch_todo: () => dispatch(fetch_todo()),
    UpdateItem: (item, key) => {
        dispatch({
            type: 'update_item', item, key
        })
    }
})
export default connect(mapStateToProps
    , mapDispatchToProps
)(Update)
