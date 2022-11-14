import { useContext, useEffect } from 'react';

import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome'
import Questions from './components/Questions';
import GameOver from './components/GameOver';

import './App.css'
import PickCategory from './components/PickCategory';
import Question from './components/Questions';

function App() {
  const [quizstate, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REODER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizstate.gameStage === "Start" && <Welcome />}
      {quizstate.gameStage === "Category" && <PickCategory />}
      {quizstate.gameStage === "Playing" && <Question />}
      {quizstate.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
