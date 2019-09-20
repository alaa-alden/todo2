import React from 'react'
import { withRouter,BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetch_todo } from '../../action'
import {
  Home,
  update
} from '../../container'


class Router extends React.PureComponent {
  componentDidMount() {
    this.props.fetch_todo()
  }
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/update/:id" component={update} />
          <Redirect from='*' to='/' />
        </Switch>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  fetch_todo: () => dispatch(fetch_todo()),
})
export default withRouter(connect(null, mapDispatchToProps)(Router))
