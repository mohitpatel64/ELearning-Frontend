import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddQuiz() {
    const { id } = useParams();
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [answer, setAnswer] = useState("");
    const saveQuiz = async (e) => {

        e.preventDefault();

        const data = {

            courseId:id,

            question,

            options: [
                option1,
                option2,
                option3,
                option4
            ],

            answer

        };

        try {

            await axios.post(
                "http://localhost:3001/course/quiz",
                data
            );

            alert("Quiz Saved");

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <form onSubmit={saveQuiz}>

          

            <br/><br/>

            <input
                placeholder="Question"
                onChange={(e)=>setQuestion(e.target.value)}
            />

            <br/><br/>

            <input
                placeholder="Option 1"
                onChange={(e)=>setOption1(e.target.value)}
            />

            <br/><br/>

            <input
                placeholder="Option 2"
                onChange={(e)=>setOption2(e.target.value)}
            />

            <br/><br/>

            <input
                placeholder="Option 3"
                onChange={(e)=>setOption3(e.target.value)}
            />

            <br/><br/>

            <input
                placeholder="Option 4"
                onChange={(e)=>setOption4(e.target.value)}
            />

            <br/><br/>

            <input
                placeholder="Correct Answer"
                onChange={(e)=>setAnswer(e.target.value)}
            />

            <br/><br/>

            <button className="quiz-button" >Save Quiz</button>

        </form>

    );

}

export default AddQuiz;