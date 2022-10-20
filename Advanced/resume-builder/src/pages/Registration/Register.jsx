import { Box } from '@mui/material'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import styles from './Register.module.scss'

const Register = () => {
  return (
    <Box>
      <section className={styles.register}>
        <h3 className={styles['register-title']}>Create Account</h3>
        <div className={styles.name}>
          <TextField id='firstName' label='First name' autoFocus={true} />
          <TextField id='lastName' label='Last name' />
        </div>
        <TextField id='email' type='email' label='Email' />
        <TextField id='password' type='password' label='Password' />
        <TextField
          id='passwordConfirm'
          type='password'
          label='Confirm Password'
        />
        <Button
          type='submit'
          variant='contained'
          sx={{ margin: '0 auto' }}
          className={styles.btn}
        >
          Register
        </Button>
      </section>
    </Box>
  )
}

export default Register
