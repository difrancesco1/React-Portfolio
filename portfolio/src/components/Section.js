// Section.js
import React from 'react';
import Title from './Title';
import '../App.css';

const Section = ({ title, className, children }) => {
  return (
    <section className={className}>
      <Title text={title} className="head-text" />
      <div className="card-cont-work">{children}</div>
    </section>
  );
};

export default Section;
