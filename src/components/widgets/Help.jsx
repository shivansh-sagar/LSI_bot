/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Help = (props) => {
    const helps = [
        {
            text: 'Create Account',
            handler: props.actionProvider.handleCreateAccount,
            href: 'https://localshopindia.com/store/register',
            id: 1,
        },
        {
            text: 'Login', handler: () => { }, id: 2,
            href: 'https://localshopindia.com/login',
        },
        {
            text: 'Add products',
            handler:props.actionProvider.handleAddProduct,
             id: 3
        }
    ];

    const btn = helps.map((help) => (
        <button key={help.id} onClick={help.handler} className="btn">
            <a className='link' target='_blank' href={help.href}>{help.text}</a>
        </button>
 ));

  return (
    <div className='options'>{btn}</div>
  )
}

export default Help