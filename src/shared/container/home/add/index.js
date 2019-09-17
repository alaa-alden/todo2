import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_item } from '../../../action'
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
        // call action
        this.props.add_item(this.state.item)
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
    add_item:(item)=>{
        dispatch(
            add_item(item)
        )
    }
})

export default connect(state=>({}),mapDispatchToProps)(form)