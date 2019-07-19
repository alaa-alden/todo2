import React, {
  Component
} from 'react'
import Add from './add'
import List from './list'
import styles from './style.scss'

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
          <List/>
          <Add/>
      </div>
    )
  }
}
export default Home
