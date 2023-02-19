import React from 'react'
import { Chatbot } from 'react-chatbot-kit';
import config from './config'
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider} />
      </header>
    </div>
  );
}

export default App;
