import { useState } from "react"
import axios from "axios";
export function Button(){

    const[question, setQuestion] = useState("");
    const[data, setData] = useState("");

    return(
        <div>
            <input onChange={(e) => {
                setQuestion(e.target.value);
            }} type="text"  placeholder="Write here...."/>

            <button onClick={async () => {
                const response = await axios.post('http://localhost:4444/user/askMe',
                    {
                        question : question
                    }
                )

                console.log(response.data);
                setData(response.data.data);
                
            }}>Chat with me</button>

            <button onClick={async () => {
                const response = await axios.post('http://localhost:4444/user/rephrase',
                    {
                    question : question
                    }
                )

                setData(response.data.data);

            }}>Rephrase</button>

            <p>{data}</p>

        </div>
    )
}