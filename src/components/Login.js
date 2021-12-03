import React from 'react'

const AccountLogin = () => {
    return(
        <div className="account">
            <form>
                <h2>Login</h2>
                <input></input>
                <input type="password"></input>
            </form>
            <div className="other-box">
                <h2> New here? Sign up! </h2>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default AccountLogin;