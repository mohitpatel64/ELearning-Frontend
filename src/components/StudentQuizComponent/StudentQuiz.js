// import './StudentQuiz.css';
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// function StudentQuiz() {

//     const [quiz, setQuiz] = useState([]);
//     const { id } = useParams();
//     const [answers, setAnswers] = useState({});
//     const [score, setScore] = useState(null);
//     const [submitted, setSubmitted] = useState(false);

//     useEffect(() => {

//         axios.get(
//             "https://elearning-backend-vh3u.onrender.com/course/quiz",
//             {
//                 params: {
//                     courseId: id
//                 }
//             }
//         )
//             .then((res) => {
//                 setQuiz(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//     }, []);

//     const handleAnswer = (questionIndex, option) => {

//         setAnswers({
//             ...answers,
//             [questionIndex]: option
//         });
//     };

//     const submitQuiz = () => {

//     let totalScore = 0;

//     quiz.forEach((q, index) => {

//         if (answers[index] === q.answer) {

//             totalScore++;
//         }
//     });
//     setScore(totalScore);
//     setSubmitted(true);

// }

//     return (
//         <>
//             {
//                 quiz.map((q, index) => (

//                     <div key={index}>

//                         <h4>{index + 1}. {q.question}</h4>

//                         {
//                             q.options.map((option, i) => (

//                                 <div key={i}>

//                                     <label>

//                                         <input
//                                             type="radio"
//                                             name={"question" + index}
//                                             value={option}
//                                             onChange={() => handleAnswer(index, option)}
//                                         />

//                                         {option}

//                                     </label>

//                                 </div>

//                             ))
//                         }

//                     </div>

//                 ))
//             }

//            <button className='sub-quiz-button'
//     onClick={submitQuiz}
//     disabled={submitted}
// >
//     Submit Quiz
// </button>

//             {score !== null && (

//     <h3>

//         Your Score : {score} / {quiz.length}

//     </h3>

// )}
//         </>
//     );

// }

// export default StudentQuiz;

































// =================================================
import './StudentQuiz.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function StudentQuiz() {

    const [quiz, setQuiz] = useState([]);
    const { id } = useParams();
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {

        axios.get(
            "https://elearning-backend-vh3u.onrender.com/course/quiz",
            {
                params: {
                    courseId: id
                }
            }
        )
            .then((res) => {
                setQuiz(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    const handleAnswer = (questionIndex, option) => {

        setAnswers({
            ...answers,
            [questionIndex]: option
        });
    };

    const submitQuiz = () => {

        let totalScore = 0;

        quiz.forEach((q, index) => {

            if (answers[index] === q.answer) {

                totalScore++;
            }
        });
        setScore(totalScore);
        setSubmitted(true);

    }

    return (

        <div className="quiz-container">

            <div className="quiz-card">

                <div className="quiz-header">

                    <h2>📝 Quiz</h2>

                    <span>
                        {quiz.length} Question
                    </span>

                </div>
                <div className="quiz-progress">

                    <div
                        className="quiz-progress-fill"
                        style={{
                            width: `${((currentQuestion + 1) / quiz.length) * 100}%`
                        }}
                    ></div>

                </div>
                {
                    quiz.length > 0 && (

                        <div className="question-card">

                            <h5>
                                Question {currentQuestion + 1} of {quiz.length}
                            </h5>

                            <h4>
                                {quiz[currentQuestion].question}
                            </h4>

                            {

                                quiz[currentQuestion].options.map((option, index) => (

                                    <label
                                        key={index}
                                        className={
                                            answers[currentQuestion] === option
                                                ? "option-box active-option"
                                                : "option-box"
                                        }
                                    >

                                        <input
                                            type="radio"
                                            name="answer"
                                            value={option}
                                            checked={answers[currentQuestion] === option}
                                            onChange={() => handleAnswer(currentQuestion, option)}
                                        />

                                        <span>{option}</span>

                                    </label>

                                ))

                            }

                        </div>

                    )
                }

                {
                    score === null && (
                <div
                    className="d-flex justify-content-between align-items-center mt-4"
                    style={{ padding: "20px 30px" }}
                >
                    <button
                        className="submit-btn"
                        disabled={currentQuestion === 0}
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                        Previous
                    </button>

                    {

                        currentQuestion < quiz.length - 1 ?

                            <button
                                className="btn btn-success"
                                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                            >
                                Next
                            </button>

                            :

                            <button
                                className="submit-btn"
                                onClick={submitQuiz}
                                disabled={submitted}
                            >
                                Submit Quiz
                            </button>

                    }

                </div>
                    )}


                {

                    score !== null && (

                        <div className="score-card">

                            <h2>

                                🎉 Your Score

                            </h2>

                            <h1>

                                {score} / {quiz.length}

                            </h1>

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default StudentQuiz;