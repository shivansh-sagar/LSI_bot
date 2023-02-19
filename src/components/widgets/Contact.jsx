/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Contact = (props) => {
    const contacts = [
        
        {
            text: 'Send-Email', handler: () => { }, id: 1,
            href: 'mailto: shivanshsagar987@gmail.com',
        },
        {
            text: 'Contact-Us',
            handler: () => { },
            href:'https://github.com/shivansh-sagar',
             id: 2
        }
    ];

    const btn = contacts.map((contact) => (
        <button key={contact.id} onClick={contact.handler} className="btn">
            <a className='link' target='_blank' href={contact.href}>{contact.text}</a>
        </button>
 ));
  return (
    <div>{btn}</div>
  )
}

export default Contact