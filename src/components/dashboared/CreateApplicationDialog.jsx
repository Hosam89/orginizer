import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useTranslation } from 'react-i18next'
import { jobApplications } from '../../Data'

function CreateApplicationDialog({ setData }) {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const [application, setApplication] = React.useState({
    position: '',
    company: '',
    jobDescription: '',
  })
  const [error, setError] = useState({
    position: false,
    company: false,
    jobDescription: false,
  })
  const handleChange = (event) => {
    setApplication({ ...application, [event.target.name]: event.target.value })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleReset = () => {
    setApplication({
      position: '',
      company: '',
      jobDescription: '',
    })
    setError({
      position: false,
      company: false,
      jobDescription: false,
    })
  }

  const handleSubmit = () => {
    // Validate required fields
    const newError = {
      position: application.position === '',
      company: application.company === '',
      jobDescription: application.jobDescription === '',
    }
    setError(newError)

    if (newError.position || newError.company || newError.jobDescription) {
      return
    }

    // Create new application object with default values
    const newApplication = {
      id: jobApplications.length + 1,
      company: application.company,
      position: application.position,
      status: '-',
      date: new Date().toISOString().split('T')[0],
      jobDescription: application.jobDescription,
      platform: '-',
    }

    // Add the new application to the jobApplications list
    setData((perv) => [...perv, newApplication])

    // Close the dialog and reset the form
    handleClose()
    handleReset()
  }

  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{
          borderRadius: 2,
          width: '50px',
          height: '30px',
        }}
      >
        <AddIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '28px',
            px: 2,
            py: 1,
          },
        }}
      >
        <DialogTitle
          id='responsive-dialog-title'
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {t('addApplication')}
        </DialogTitle>
        <DialogContent sx={{ minWidth: '520px' }}>
          <Grid2 container direction='column' gap={2}>
            <TextField
              fullWidth
              id='position-textfield'
              label={t('position')}
              variant='outlined'
              sx={{ mt: 1 }}
              name='position'
              onChange={handleChange}
              value={application.position}
              error={error.position}
              helperText={error.position && t('requierdField')}
            />
            <TextField
              fullWidth
              id='company-textfield'
              label={t('company')}
              variant='outlined'
              name='company'
              onChange={handleChange}
              value={application.company}
              error={error.company}
              helperText={error.company && t('requierdField')}
            />
            <TextField
              fullWidth
              id='job-description-textfield'
              label='Job Description'
              variant='outlined'
              multiline
              rows={4}
              name='jobDescription'
              onChange={handleChange}
              value={application.jobDescription}
              error={error.jobDescription}
              helperText={error.jobDescription && t('requierdField')}
            />
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={handleClose}>
            {t('cancel')}
          </Button>
          <Button variant='contained' onClick={handleSubmit} autoFocus>
            {t('add')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CreateApplicationDialog
