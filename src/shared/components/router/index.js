import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import {
  Home,
  update
} from '../../container'

class Router extends React.PureComponent {
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
export default withRouter(Router)
