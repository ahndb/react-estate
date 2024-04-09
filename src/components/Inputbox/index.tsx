import React from 'react';
import './style.css';

interface InputBoxProps {
  label: string;
  type: 'text' | 'password';
  placeholder: string;
  button?: string;
}


export default function InputBox({label, type, placeholder, button}: InputBoxProps) {

  return (
    <div className="input-box">
      <div className="input-label label">{label}</div>
      <div className="input-content-box">
          <input className="input" type={type} placeholder={placeholder} />
          <div className="input-disable-button">{button}</div>
      </div>
      <div className="input-message"></div>
    </div>
  )
}
