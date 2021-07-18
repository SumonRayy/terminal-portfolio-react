import React from 'react'
import { myData } from './../data/personalData'

function Prompt({path}) {
    return (
        <div className='prompt'>
                {myData.name}@<span className='prompt-user'>{myData.id}</span>:<span className='prompt-path'>/{path}</span> $ 
                <span contentEditable="true" suppressContentEditableWarning={true} id='type' 
                    onInput={e => console.log('typo : ', e.currentTarget.textContent)}
                >type here...</span><span className='blink'>_</span>
                
                
            </div>
    )
}

export default Prompt
