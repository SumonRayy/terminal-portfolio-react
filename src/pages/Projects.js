import React from 'react'
import Commands from '../components/Commands'
import Prompt from '../components/Prompt'
import { projects } from '../data/personalData'

function Projects({ username }) {
    return (
        <div className='window column' id="scrolls">
            <Commands currentPage='projects'/>

            <div className="projects">
                <Prompt username={username} path='projects'/>

                {projects.map((project, index) => {
                return (<p key={project.id}>
                    #{project.id} <a href={project.url}>{project.projectName}</a><br />
                    {project.projectDesc}
                </p>)
                })}

            </div>
            
        </div>
    )
}

export default Projects
