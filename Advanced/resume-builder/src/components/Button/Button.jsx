import * as React from 'react'
import Stack from '@mui/material/Stack'
import { Button as ButtonMui } from '@mui/material'

const Button = ({
  classes,
  color,
  disabled,
  disableElevation,
  disableFocusRipple,
  endIcon,
  fullWidth,
  href,
  size,
  startIcon,
  sx,
  variant,
  ...props
}) => {
  let buttonProps = {
    classes,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    endIcon,
    fullWidth,
    href,
    size,
    startIcon,
    sx,
    variant,
    ...props,
  }
  return (
    <Stack spacing={2} direction='row'>
      <ButtonMui {...buttonProps}></ButtonMui>
    </Stack>
  )
}

export default Button
