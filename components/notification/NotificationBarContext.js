import { createContext } from 'react'
import { useState } from 'react'
import NotificationBar from './NotificationBar'
import { useContext } from 'react'

const NotificationContext = createContext({
  open: false,
  message: '',
  status: '',
  showNotification: function (message, status) {},
  hideNotification: function () {},
})

export const useNotification = () => {
  return useContext(NotificationContext)
}

const NotificationBarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const showNotification = (message, status) => {
    setOpen(true)
    setMessage(message)
    setStatus(status)
  }

  const hideNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    setMessage('')
    setStatus('')
  }

  const context = {
    showNotification: showNotification,
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
      <NotificationBar
        open={open}
        message={message}
        status={status}
        hideNotification={hideNotification}
      />
    </NotificationContext.Provider>
  )
}

export default NotificationBarContextProvider
