import React from 'react'
import { Box } from "@mui/system"
import { Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { handleAmountChange, handleScoreChange } from '../../redux/actions'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector(state => state);
  const { amount_of_question } = useSelector(state => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(30));
    navigate("/settings")
  }
  return (

    <Box mt={30} textAlign="center" >
      <div className='icon'>
        <CheckCircleOutlineIcon color='success' fontSize='large' />
      </div>

      <h1 className='title2' >Congratulations you made it</h1>

      <div className='title3'>
        <h3 className='title4'>You can do better</h3>
        <Typography mt={3} variant="h3" fontWeight="bold" color="#6191D3">Your score : {score}/{amount_of_question}</Typography>
      </div>
      <Button onClick={handleBackToSettings} variant="outlined" >Back to settings!</Button>
    </Box >
  )
}

export default FinalScreen