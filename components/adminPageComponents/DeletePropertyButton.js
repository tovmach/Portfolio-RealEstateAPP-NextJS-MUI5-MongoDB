import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import { red } from '@mui/material/colors'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const DeletePropertyButton = ({ id }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const router = useRouter()

  const deletePropertyHandler = () => {
    axios.delete('/api/delete-property', { data: { id } }).then((res) => {
      console.log(res)
      router.push('/admin')
    })
  }
  return (
    <>
      <Button
        fullWidth
        variant='contained'
        onClick={handleClickOpen}
        sx={{
          bgcolor: red[600],
          '&:hover': {
            bgcolor: red[500],
          },
        }}
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Delete this property'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete this property? The content will be
            permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={deletePropertyHandler} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeletePropertyButton
