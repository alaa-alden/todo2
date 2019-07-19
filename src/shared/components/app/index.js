import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Router,Footer,Header } from '../'
import styles from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ToDo</title>
          <link
            rel="shortcut icon"
            href="https://cdn3.iconfinder.com/data/icons/ui-icons-part-1/36/Gear_Small-512.png"
            type="image/x-icon"
          />
        </Helmet>
        {/* <Header/> */}
        <div className="container-fluid">
          <Router />
        </div>
        {/* <Footer/> */}
      </div>
    )
  }
}
export default App
