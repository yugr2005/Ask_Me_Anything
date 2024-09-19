const axios  = require("axios");
const url = process.env.URL;
const API_KEY = process.env.API_KEY;

async function rephrase(req,res){

    const {question} = req.body;
    const response = await axios.post(url ,{

        model : "gpt-3.5-turbo",
        messages : [
            {
                role : "system",
                content : "You are a helpful assistant that rephrases the following sentences in a more formal tone. Only return the rephrased sentence with no additional information and after the sentence also ask for their name."
            },
            {
                role : "user",
                content : question
            }
        ],
        
        max_tokens : 50,
        temperature : 0.7,
        n : 1,

    },{
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${API_KEY}` 
      
        }
    })

    res.json({
        data : response.data.choices[0].message.content,

    })
}

module.exports = rephrase;