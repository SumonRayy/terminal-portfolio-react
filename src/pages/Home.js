import React from 'react'
import Commands from '../components/Commands'
import Prompt from '../components/Prompt'

function Home() {




    return (
        <div className='window'>
            
            <div className='home'>
                <Prompt path='home'/>
            </div>
                <Commands currentPage='home'/>
            
        </div>
    )
}

export default Home
