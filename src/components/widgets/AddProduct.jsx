/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const AddProduct = (props) => {
    const helps = [
        
        {
            text: 'Login', handler: () => { }, id: 1,
            href: 'https://localshopindia.com/login',
        },
        {
            text: 'Add products',
            handler: () => { },
            href:'https://localshopindia.com/product/add',
             id: 2
        }
    ];

    const btn = helps.map((help) => (
        <button key={help.id} onClick={help.handler} className="btn">
            <a className='link' target='_blank' href={help.href}>{help.text}</a>
        </button>
 ));
  return (
    <div>{btn}</div>
  )
}

export default AddProduct