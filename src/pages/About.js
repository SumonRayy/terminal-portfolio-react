import React from 'react'
import Commands from '../components/Commands';
import Prompt from '../components/Prompt'
import { myData } from '../data/personalData';

function About() {
    return (
        <div className='window column'>
                    <Commands currentPage='about'/>
                <div className='about'>
                    <Prompt path='about'/>                    
                    <p>
                        {myData.about}
                    </p>
                </div>
        </div>
    )
}

export default About;