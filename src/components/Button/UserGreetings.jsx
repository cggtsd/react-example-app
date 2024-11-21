
export const UserGreetings = ({isLoggedIn=false,userName='Guest'}) => {
    
    // if (isLoggedIn) {
    //     return (<h2>Welcome {userName }</h2>)
    // }
    // else {
    //     return( <h2>Please login to continue</h2>)
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {userName}</h2>
    const logInPrompt=<h2 className="login-prompt">Please login to continue</h2>
    return (
        isLoggedIn?welcomeMessage:logInPrompt
    )
}

// UserGreetings.defaultProps = {
//     isLoggedIn: false,
//     userName:'Guest'
// }