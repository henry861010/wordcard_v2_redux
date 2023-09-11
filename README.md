# wordcard


##openai-chat
## notice
1. the project uses the openai api which requires the api key in the http request. before running the project, set enviroment variable OPENAI_API_KEY to you openai api key. cmd: OPENAI_API_KEY=[your_api_key]
(go to https://platform.openai.com/account/api-keys to require api key)

## note
1. the openai package updates to v4 from v3. some api in package are not supported anymore. to begin the openai project:
older version(not avaiable):
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-RxKuWyIn5DCxd9h4TCsOyFx5",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const responseJSON = await openai.chat.completions.create();

new version:
import OpenAI from 'openai';
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });
const responseJSON = await openai.chat.completions.create();
(reference: https://platform.openai.com/docs/guides/gpt/chat-completions-api)


## resource
simple openai-chat project
1. https://platform.openai.com/docs/guides/gpt/chat-completions-api
2. https://rollbar.com/blog/chatgpt-api-with-javascript/ (take note that it uses the older version method to build the openai instance)
openai-chat new function - function calling
there exist the uncertain response of the openai. for example, although we require the response must be .json formate. the data type in .json may different in each time which let the programmer hard to deal with data. to overcome this problem, we can use "function calling" to  require the specific data structure of the response
1. https://cobusgreyling.medium.com/practical-examples-of-openai-function-calling-a6419dc38775
2. https://www.datacamp.com/tutorial/open-ai-function-calling-tutorial
3. https://platform.openai.com/docs/guides/gpt
