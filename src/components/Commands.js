import React from 'react'
import { Link } from 'react-router-dom'
import  pages from '../data/pageData'


function Commands({currentPage}) {

    return (
        <div className='commands'>                               
                    {pages.map((page, index) => {
                        return (
                            currentPage === page.pageName ? (<span key={page.id} id='current'>/{page.pageName}</span>) : (<Link key={page.id} to={page.pageLink}>
                                <div className='page'>
                                    /{page.pageName}                        
                                </div>    
                                </Link>)
                            
                         )       
                    })}
                <span id='help'>/help</span>            
            </div>
    )
}

export default Commands
