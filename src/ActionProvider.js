
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = [
      createChatBotMessage('Hello. Nice to meet you.'),
      createChatBotMessage('Do you need help?',{
        withAvatar: false,
        delay:1000,
      }),
    ]
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage[0], botMessage[1]],
    }));

  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHelp = () => {
    const botMessage = createChatBotMessage(
      "Here's some options for you!",
      {
        widget: 'helps',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleOption = () => {
    const botMessage = createChatBotMessage(
      "here is some options",
      {
        widget: 'options',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }; 
  const handleCreateAccount = () => {
    const botMessage = createChatBotMessage(
      "Do you need any more help?",
      
    )
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAddProduct = () => {
    const botMessage = createChatBotMessage(
      "First, you need to login to your account as a Vendor. Then, you can add products to your store.",
      {
        widget: 'addProduct'
      }
      
    )
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleJavascriptQuiz = () => {
    const botMessage = createChatBotMessage(
      "Javascript Quiz",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDefault = () => {
    const botMessage = createChatBotMessage(
      "Sorry, I didn't get that."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContact = () => {
    const botMessage = createChatBotMessage(
      "Here's some options for you to contact us!",
      {
        widget: 'contact',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleHelp,
            handleOption,
            handleCreateAccount,
            handleAddProduct,
            handleJavascriptQuiz,
            handleDefault,
            handleContact,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;