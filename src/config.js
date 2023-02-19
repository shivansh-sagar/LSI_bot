import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './components/widgets/DogPicture';
import Options from './components/widgets/Options';
import BotAvtar from './components/BotAvtr/BotAvtar';
import Help from './components/widgets/Help';
import AddProduct from './components/widgets/AddProduct';
import Contact from './components/widgets/Contact';

const botName = 'LSI Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />
    },
    {
      widgetName: 'helps',
      widgetFunc: (props) => <Help {...props} />
    },
    {
      widgetName: 'addProduct',
      widgetFunc: (props) => <AddProduct {...props} />
    },
    {
      widgetName: 'contact',
      widgetFunc: (props) => <Contact {...props} />
    }
  ],
  botName: botName,
  customComponents: {
   botAvatar: (props) => <BotAvtar {...props} />
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ee8811',
    },
    chatButton: {
      backgroundColor: '#ee8811',
    },
  },
};

export default config;