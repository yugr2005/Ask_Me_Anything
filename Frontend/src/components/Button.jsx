import { useState } from "react";
import axios from "axios";

export function Button() {
    const [question, setQuestion] = useState("");
    const [data, setData] = useState(""); // Single response, updated each time

    return (
        <div className="button-container">
            <input
                onChange={(e) => {
                    setQuestion(e.target.value);
                }}
                type="text"
                placeholder="Ask me anything....."
            />

            <div className="button-group">
                <button
                    onClick={async () => {
                        const response = await axios.post('http://localhost:4444/user/askMe', {
                            question: question,
                        });

                        console.log(response.data);
                        setData(response.data.data); // Set single response
                    }}
                >
                    Answer this
                </button>

                <button
                    onClick={async () => {
                        const response = await axios.post('http://localhost:4444/user/rephrase', {
                            question: question,
                        });

                        setData(response.data.data); // Set single response
                    }}
                >
                    Rephrase
                </button>
            </div>

            {/* Render the response in a card-like component if data exists */}
            {data && (
                <div className="output-card">
                    <p>{data}</p>
                </div>
            )}
        </div>
    );
}
