import { useContext, useEffect } from 'react';

import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome'
import Questions from './components/Questions';
import GameOver from './components/GameOver';

import './App.css'

function App() {
  const [quizstate, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REODER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizstate.gameStage === "Start" && <Welcome />}
      {quizstate.gameStage === "Playing" && <Questions />}
      {quizstate.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
