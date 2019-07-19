import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setItem } from '../../../action'
class form extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ item: event.target.value });
    }

    handleSubmit(event) {
        this.props.setitem(this.state.item)
        this.setState({ item: "" });
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.item} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
const mapDispatchToProps=dispatch=>({
    setitem:(item)=>{
        dispatch(
            setItem(item)
        )
    }
})
const mapSTP=state=>({
})
export default connect(mapSTP,mapDispatchToProps)(form)