import axios from 'axios';
import express, { application } from 'express'
const app = express()
let access_token = "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"
const fetchGitHubUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/user`,
        {headers: {
            Authorization: "token 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"
        }}
      )
      console.log(`Git user name is ${response.data.name} who lives in ${response.data.location} ` )
      return response.data;
    } catch (error) {
      console.error('Error fetching the GitHub user data:', error);
      return null;
    }
  };

  
 app.get('/', async (req , res )  => {
    const data = await fetchGitHubUser()
    if(data){
        res.send(`Git user name is ${data.name} who lives in ${data.location} `)
    }else{
        console.log("")
    }
 })

 app.listen(3000, () =>{
    console.log("Running on http://localhost:3000")
 }
)