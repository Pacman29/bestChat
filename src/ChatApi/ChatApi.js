import {ApiAiClient} from 'api-ai-javascript';


const token = '3f0492bce1d74f66a4e254f62e95b7df';

let instance;

export default class ChatAPI {
  constructor(options){
    if(instance)
      return;

    this.client = new ApiAiClient({accessToken: token});
    instance = this;
  }



  sendMessage(message){
    return this.client.textRequest(message);
  }
}
