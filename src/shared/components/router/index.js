import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect}from 'react-redux'
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
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/update/:id" component={update}/>
        </Switch>
      </div>
    )
  }
}
const mapDispatchToProps=dispatch=>({
  fetch_todo: () => dispatch(fetch_todo()),
})
export default withRouter(connect(null,mapDispatchToProps)(Router))
