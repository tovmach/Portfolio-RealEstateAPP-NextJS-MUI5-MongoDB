import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import useMediaQuery from '@mui/material/useMediaQuery'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const NotificationBar = ({ open, status, message, hideNotification }) => {
  const matchesMdMin = useMediaQuery('(min-width:900px)')
  if (status === 'success') {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: matchesMdMin ? 'bottom' : 'top',
          horizontal: matchesMdMin ? 'left' : 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={hideNotification}
      >
        <Alert
          onClose={hideNotification}
          severity='success'
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  }
  if (status === 'error') {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: matchesMdMin ? 'bottom' : 'top',
          horizontal: matchesMdMin ? 'left' : 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={hideNotification}
      >
        <Alert
          onClose={hideNotification}
          severity='error'
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  }
  if (status === 'warning') {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: matchesMdMin ? 'bottom' : 'top',
          horizontal: matchesMdMin ? 'left' : 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={hideNotification}
      >
        <Alert
          onClose={hideNotification}
          severity='warning'
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  }
  if (status === 'info') {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: matchesMdMin ? 'bottom' : 'top',
          horizontal: matchesMdMin ? 'left' : 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={hideNotification}
      >
        <Alert
          onClose={hideNotification}
          severity='info'
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    )
  }
  return <></>
}

export default NotificationBar
