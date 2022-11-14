import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from '../img/welldone.svg';

import './GameOver.css';

function GameOver() {
    const [quizstate, dispatch] = useContext(QuizContext);

    return (
        <div id='gameover'>
            <h2>Fim de Jogo</h2>
            <p>Pontuação: {quizstate.score}</p>
            <p>Você acertou {quizstate.score} de {quizstate.questions.length}{" "}perguntas.</p>
            <img src={WellDone} alt="Fim do Jogo" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver