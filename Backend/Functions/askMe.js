const axios = require("axios");
const url = process.env.URL;
const API_KEY = process.env.API_KEY;

async function askMe(req,res) {

    const {question} = req.body;
    const response = await axios.post(url ,{

        model : "gpt-3.5-turbo",
        messages : [
            {
                role : "system",
                content : "You are an helpful assistant."
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

module.exports =  askMe;