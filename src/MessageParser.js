import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hiii') || message.includes('hii') || message.includes('hiiii') || message.includes('hiiiii'))  {
      actions.handleHello();
      console.log("hi");
    }

    else if (message.includes('yes')|| message.includes('sure') || message.includes('ok') || message.includes('okay') || message.includes('yup') || message.includes('yep') || message.includes('yeah') || message.includes('alright')) {
      actions.handleHelp();
      console.log("help");
    }

    else if(message.includes('contact')){
      actions.handleContact();
      console.log("contact_options");
    }

    else if (message.includes('dog') || message.includes('dogs') || message.includes('puppy') || message.includes('puppies') || message.includes('pup') || message.includes('pups')) {
      actions.handleDog();
      console.log("Rottweiler");
    }

    else if (message.includes('option') || message.includes('options') || message.includes('choice') || message.includes('choices') || message.includes('select') || message.includes('selects') || message.includes('menu') || message.includes('list')) {
      actions.handleOption();
      console.log("options parsing");
    }
    else{
      actions.handleDefault();
      console.log("default");
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;