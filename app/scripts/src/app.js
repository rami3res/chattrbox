import {
  ChatForm,
  ChatList
} from './dom';
import socket from './ws-client';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

class ChatMessage {
  constructor({
    'message': m,
    'timestamp': t = (new Date()).getTime(),
    'user': u = 'batman'
  }) {
    this.message = m;
    this.timestamp = t;
    this.user = u;
  }

  serialize() {
    return {
      'message': this.message,
      'timestamp': this.timestamp,
      'user': this.user
    };
  }
}

class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.ChatList = new ChatList(LIST_SELECTOR, 'wonderwoman');

    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      this.chatForm.init((data) => {
        const message = new ChatMessage({'message': data});
        socket.sendMessage(message.serialize());
      });
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
      const message = new ChatMessage(data);
      this.ChatList.drawMessage(message.serialize());
    });
  }
}

export default ChatApp;
