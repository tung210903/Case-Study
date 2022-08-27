import React from 'react'
import SelectField from './SelectField'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Container, Button, CircularProgress, Typography } from '@mui/material'
import "./settings.css"
import TextFieldComp from './TextFieldComp'
import useAxios from '../../hooks/useAxios'
const Settings = () => {

  const { respone, error, loading } = useAxios({ url: "/api_category.php" })
  const navigate = useNavigate()
  if (loading) {
    return (
      <Box mt={20} textAlign="center">
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Typography variant='h6' mt={20} color="red">Some Things Wrong!</Typography>
    )
  }

  const difficultyOptions = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' }
  ]

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" }
  ]

  console.log(respone);
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/questions');
  }

  return (
    <Container maxWidth="sm">
      <h1 className='title'>Quiz App</h1>
      <Box textAlign="center" mt={5}>
        <form onSubmit={handleSubmit}>
          <SelectField options={respone.trivia_categories} label="Category" />
          <SelectField options={difficultyOptions} label="Difficulty" />
          <SelectField options={typeOptions} label="Type" />
          <TextFieldComp />
          <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
              Get Started
            </Button>
          </Box>
        </form>
      </Box>
    </Container>

  )
}

export default Settings