import React, { useState } from 'react'

import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Login from '../Login/Login'
import Register from '../Registration/Register'
import ButtomNavigation from '../../ui/ButtomNavigation/ButtomNavigation'
import styles from './Authentication.module.scss'

const Authentication = () => {
  const [tabValue, setTabValue] = useState(0)

  return (
    <div className={styles.container}>
      <ButtomNavigation
        sx={{
          backgroundColor: '#fff',
          width: 200,
          margin: 'auto',
          borderRadius: '10px',
        }}
      >
        <BottomNavigationAction
          label='Login'
          onClick={() => {
            setTabValue(0)
          }}
        />
        <BottomNavigationAction
          label='Register'
          onClick={() => setTabValue(1)}
        />
      </ButtomNavigation>
      <div className={styles.authentication}>
        {tabValue === 0 && <Login />}
        {tabValue === 1 && <Register />}
      </div>
    </div>
  )
}
export default Authentication
