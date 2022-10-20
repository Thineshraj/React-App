import * as React from 'react'
import Box from '@mui/material/Box'
import { BottomNavigation as BottomNavigationMui } from '@mui/material'

const ButtonNavigation = ({ sx, onChange, ...props }) => {
  const [value, setValue] = React.useState(0)
  const onChangeHandler = (event, newValue) => {
    setValue(newValue)
  }

  let buttonNavigationProps = {
    sx,
    onChange: onChangeHandler,
    ...props,
  }

  return (
    <BottomNavigationMui showLabels value={value} {...buttonNavigationProps}>
      {props.children}
    </BottomNavigationMui>
  )
}

export default ButtonNavigation
