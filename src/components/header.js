import React from 'react'
import { Link } from 'react-router-dom';

const SiteHeader = ({token}) => {
    
    return ( <header className="site-header">
                <h3>Stranger's Things</h3>
                <nav>
                    { token ? ( <>
                        <Link to={`/posts`}>
                        <a href="#">Home</a>
                    </Link>
                    <Link to={`/posts/new`}>
                        <a href="#">New Post</a>
                    </Link>
                    
                    <Link to={`/account`}>
                        <a href="#">Account</a>   
                    </Link>
                    </>) : (
                        <Link to={`/signIn`}>
                            <a href="#">Sign In</a> 
                        </Link>
                    )
                    }
                    
                        
                     
                </nav>
            
            </header>
        
      
    )
}

export default SiteHeader;