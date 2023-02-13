
const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI
const configuration = new Configuration({
    organization: "org-1bCDdcHn8QdzDQ9qwpd8BaAJ",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);




const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { computeHeadingLevel } = require('@testing-library/react');
const app = express()
const port = 3001;

app.use(bodyParser.json())
app.use(cors());

app.post('/', async (req, res) => {
    const { message, girlName, numberJealousy, numberLoving } = req.body;
    console.log(girlName);

    const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `Pretende que eres mi amigo, tu nombre es ${girlName}, tu personalidad es ${numberJealousy}/10 motivacional, ${numberLoving}/10 cariñoso. 
  Persona: Hola, como estas?
  amigo: Bien y tu?
  Persona: Bien, aqui estoy relajandome.
  amigo: Te echo de menos
  Persona: Yo también,¿cuando nos vemos?
  amigo: Cuando tu quieras.
  Persona: ${message}?`,
  max_tokens: 100,
  temperature: 0,
});
    console.log(response.data)
   
        if(response.data.choices[0].text){
            res.json({
                message: response.data.choices[0].text
            });
        }
    }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
