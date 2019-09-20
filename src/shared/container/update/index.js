import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Update extends Component {
    constructor(props) {
        super(props)
        //init update's state 
        this.state = {
            list: {},
            thing:null
        }
    }
    componentDidUpdate(nextProps, nextState) {
        if (this.state.list != nextProps.list && this.setState) {
            this.setState({
                list: nextProps.list
            })
        }
        if (Object.keys(this.state.list).length > 0 && !this.state.thing) {
            let handleList = this.state.list
            for (let key in handleList) {
                if (handleList[key]._id == this.props.match.params.id) {
                    this.setState({ thing: handleList[key].task })
                    break
                }
            }
        }
    }
    handleChange = event => this.setState({ thing: event.target.value })

    handleSubmit = event => {
        event.preventDefault()
        const {id} = this.props.match.params
        // toDo ... i have info and i want to save the update of item ,,,,,, but how
        this.props.UpdateItem(this.state.thing, id)
        this.props.history.push(`/`)
    }
    render() {
        if (this.state.thing)
            return (
                <div>
                    <Link to="/">home</Link>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.thing} onChange={this.handleChange} />
                        <input type='submit' value='Click me ...' />
                    </form>
                </div>
            )
        else return (
            <Link to='/'>return</Link>
        )
    }
}
const mapStateToProps = state => ({ list: state.store.list })
const mapDispatchToProps = dispatch => ({
    UpdateItem: (item, key) => {
        dispatch({
            type: 'update_item', item, key
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Update)






/*




    render(){
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
})*/