import React from 'react';
// import OptionJs from './OptionJs';

const Options = (props) => {
    const options = [
        {
            text: 'JavaScript',
            handler: props.actionProvider.handleJavascriptQuiz,

            id: 1,
        },
        {
            text: 'Python', handler: () => { }, id: 2
        }
    ];

    const btn = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="btn">
            {option.text}
        </button>
    ));


    return (
        <div className='options'>{btn}</div>
    )
}

export default Options