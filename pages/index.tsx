import { Provider } from 'mobx-react'
import type { NextPage } from 'next'

import { store } from '../src/store/TestStore'
import styles from '../styles/Home.module.css'

import Mst from './mst'

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Mst />
      </div>
    </Provider>
  )
}

export default Home
