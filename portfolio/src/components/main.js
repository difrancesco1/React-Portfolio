import React from 'react';
import '../App.css';

const Main = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Main;
