import React from 'react'
import { Link } from 'react-router-dom';

const SiteHeader = ({token}) => {
    
    return ( <header className="site-header">
                <h3>Stranger's Things</h3>
                <nav>
                    { token ? ( <>
                        <Link to={`/posts`}>
                        <a>Home</a>
                    </Link>
                    <Link to={`/posts/new`}>
                        <a>New Post</a>
                    </Link>
                    
                    <Link to={`/messages`}>
                        <a>Messages</a>   
                    </Link>
                    </>) : (
                        <Link to={`/signIn`}>
                            <a>Sign In</a> 
                        </Link>
                    )
                    }
                    
                        
                     
                </nav>
            
            </header>
        
      
    )
}

export default SiteHeader;