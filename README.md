# wordcard
Wordcar is a ReactJS-based web application that serves as your word management tool. It's a side project dedicated to honing my front-end web development skills. With Wordcar, you can efficiently manage your vocabulary.
## introduction
### function
1. record the word through the web browser
2. add/delete word
3. edit word
4. quick review all the words
5. provide the searching method to quick search the desired word
6. using openAI to generate the meaning, example and description for the added word
### coding skill in this project
1. html/ css
2. reactjs/ redux
3. SQL
6. docker

## runing the project
### method1: build on the local
step1: `git clone https://github.com/henry861010/wordcard_v2_redux.git` pull the code from github to local directory  
step2: `cd ./wordcard_v2_redux`  
step3: `npm install` install the necessory package of this project  
step4: `npx json-server -p 7001 --w ./db/db.json` the database to store the words  
step5: `npm run` begin the the web server and waiting for the request comming  
step6: go to your local browser and search 127.0.0.1:3000(default)  
### method2: use docker  
requirement - please ensure docker was installed already before following step. if not https://docs.docker.com/engine/install/  
step1: `docker pull henry861010/wordcard` pull the project image from the dockerhub   
step2: `docker run -dp 3000:3000 -dp 7001:7001 --name wordcard henry861010/wordcard` run the docker container to begin the project   
step3: go to your local browser and search 127.0.0.1:3000  

### notice  
1. *the function "using openAI to generate the meaning, example and description" is required openAI - APIkey which is unfree. to use this function, you should apply openAI - APIkey from the https://platform.openai.com/account/api-keys firtly . then when you "addword", you can input your APIkey to the APIkey input field to generate the result from opai* (each requirement spent roughly 0.025 USD)

## others
### note  
1. the openai package updates to v4 from v3. some api in package are not supported anymore. to begin the openai project:   
older version(not avaiable):  
    `import { Configuration, OpenAIApi } from "openai";`  
    `const configuration = new Configuration({`  
    `    organization: "org-RxKuWyIn5DCxd9h4TCsOyFx5",`  
    `    apiKey: process.env.OPENAI_API_KEY,`   
    `});`  
    `const openai = new OpenAIApi(configuration);`  
    `const responseJSON = await openai.chat.completions.create();`  
new version:  
    `import OpenAI from 'openai';`  
    `const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });`  
    `const responseJSON = await openai.chat.completions.create();`  
(reference: https://platform.openai.com/docs/guides/gpt/chat-completions-api)
2.  the json-server should be set with host `0.0.0.0` instead of `127.0.0.1`(or the host can not connect to the json-server in the docker container)
   run json-server like: `npx json-server --host 0.0.0.0 -p 7001 --w ./db/db.json`
### resource  
#### docker and dockerfile for reatjs app
1. https://www.freecodecamp.org/news/how-to-dockerize-a-react-application/
#### simple openai-chat project  
1. https://platform.openai.com/docs/guides/gpt/chat-completions-api  
2. https://rollbar.com/blog/chatgpt-api-with-javascript/ (take note that it uses the older version method to build the openai instance)
#### openai-chat new function - function calling    
there exist the uncertain response of the openai. for example, although we require the response must be .json formate. the data type in .json may different in each time which let the programmer hard to deal with data. to overcome this problem, we can use "function calling" to  require the specific data structure of the response  
1. https://cobusgreyling.medium.com/practical-examples-of-openai-function-calling-a6419dc38775  
2. https://www.datacamp.com/tutorial/open-ai-function-calling-tutorial  
3. https://platform.openai.com/docs/guides/gpt  
