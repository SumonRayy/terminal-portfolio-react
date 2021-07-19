import React from 'react'
import Commands from '../components/Commands'
import Prompt from '../components/Prompt'
import { contactData } from '../data/personalData'


function Contact() {
    return (
        <div className="window cloumn">
            <div className="contact">
                <Prompt path="contact"/>
                
                <ul>
                    {contactData.map((data) => {
                        return (
                            <li key={data.id}>
                                <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a> : {data.desc}</li>
                        )
                    })}
                </ul>

            </div>
            <Commands currentPage='contact'/>
            
        </div>
    )
}

export default Contact
