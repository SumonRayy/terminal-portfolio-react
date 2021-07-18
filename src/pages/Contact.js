import React from 'react'
import Commands from '../components/Commands'
import Prompt from '../components/Prompt'

const contactData = [
    {
        id: 1,
        title: 'Email',
        link: 'mailto:sumonrayy@gmail.com',
        desc: 'mail me for any query'
    },
    {
        id: 2,
        title: 'GitHub',
        link: 'https://github.com/SumonRayy',
        desc: 'Follow me on GitHub to watch my Repos'
    },
    {
        id: 3,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/sumon-roy-29a2b3186/',
        desc: 'Follow me at LinkedIn'
    },
]

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
