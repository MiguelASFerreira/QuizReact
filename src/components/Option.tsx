import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Option.css';

const Option = ({ option, selectOption, answer}) =>  {
  const [quizstate, dispatch] = useContext(QuizContext);

  return (
    <div className={`option ${quizstate.answerSelected && option === answer ? 'correct' : ''} 
      ${quizstate.answerSelected && option !== answer ? 'wrong' : ''}`} onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option;