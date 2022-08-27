import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Button, CircularProgress, Typography } from '@mui/material'
import useAxios from '../../hooks/useAxios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { handleScoreChange } from '../../redux/actions'

const getrandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector(state => state)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }


  const { respone, loading } = useAxios({ url: apiUrl })

  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([])



  useEffect(() => {
    if (respone?.results.length) {
      const question = respone.results[questionIndex];
      let answers = [...question.incorrect_answers]
      answers.splice(
        getrandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers)
    }
  }, [respone, questionIndex])

  if (loading) {
    return (
      <Box mt={20} textAlign="center">
        <CircularProgress />
      </Box>
    )
  }

  const handleClickAnswer = (e) => {

    const question = respone.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < respone.results.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      navigate('/score')
    }
  }
  return (
    <Box textAlign="center">
      <Typography variant='h4' paddingTop="80px">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{respone.results[questionIndex].question}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant='contained'>{data}</Button>
        </Box>
      ))}
      <Box mt={5}>Score : {score}/{respone.results.length}</Box>
    </Box>
  )
}

export default Questions