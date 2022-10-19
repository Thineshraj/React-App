import * as React from 'react'
import Box from '@mui/material/Box'
import { TextField as TextFieldMui } from '@mui/material'

const TextField = ({
  autoComplete,
  autoFocus,
  classes,
  color,
  defaultValue,
  disabled,
  error,
  fullWidth,
  helperText,
  id,
  InputLabelProps,
  inputProps,
  InputProps,
  inputRef,
  label,
  margin,
  maxRows,
  minRows,
  multiline,
  name,
  onChange,
  placeholder,
  required,
  rows,
  select,
  SelectProps,
  size,
  type,
  value,
  variant,
  ...props
}) => {
  let definedProps = {
    autoComplete,
    autoFocus,
    classes,
    color,
    defaultValue,
    disabled,
    error,
    fullWidth,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    margin,
    maxRows,
    minRows,
    multiline,
    name,
    onChange,
    placeholder,
    required,
    rows,
    select,
    SelectProps,
    size,
    type,
    value,
    variant: 'outlined',
    ...props,
  }
  return <TextFieldMui {...definedProps} />
}

export default TextField
