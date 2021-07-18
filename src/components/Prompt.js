import React from 'react'
import { myData } from './../data/personalData'

function Prompt({path}) {
    return (
        <div className='prompt'>
                {myData.name}@<span className='prompt-user'>{myData.id}</span>:<span className='prompt-path'>/{path}</span> $ 
                <span contentEditable="true" suppressContentEditableWarning={true} id='type' 
                >type here...</span><span className='blink'>_</span>
                
                
            </div>
    )
}

export default Prompt
