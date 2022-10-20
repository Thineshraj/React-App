import Box from '@mui/material/Box'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': {
          m: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        },
      }}
      noValidate
      autoComplete='off'
    >
      <section className={styles.login}>
        <h3 className={styles['login-title']}>Login</h3>
        <TextField
          id='username'
          label='Username'
          type='text'
          autoFocus={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField id='password' label='Password' type='password' />
        <p className={styles['login-resetPassword']}>
          <a href='#'>Forget Password</a>
        </p>
        <Button variant='contained' sx={{ margin: '0 auto' }}>
          Login
        </Button>
      </section>
    </Box>
  )
}

export default Login
