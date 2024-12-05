import React from 'react'
import '../../App.css';
import CardReg from './card-rg';
import CardRegStack from './card-rg-stack';
import CardLong from './card-long';
import CardWide from './card-wide';
import CardSmall from './card-sm';

const About = () => {
    return (
        <div className='card-holder'>
            <CardReg />
            <CardRegStack />
            <CardLong />
            <CardWide />
            <CardSmall />
        </div>
    )
}

export default About