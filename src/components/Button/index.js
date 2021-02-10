import React from 'react';

import { Primary, Cancel, Label } from './styles';

export default function Button({ children, label, onClick, cancel }) {
  // Returns desired type of button
  // Cancel props is optional
  if (cancel) {
    return (
      <Cancel onClick={onClick}>
        <Label cancel>{label}</Label>
        {children}
      </Cancel>
    );
  } else {
    return (
      <Primary onClick={onClick}>
        <Label>{label}</Label>
        {children}
      </Primary>
    );
  }
}
