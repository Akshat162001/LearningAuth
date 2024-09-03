import React from 'react';
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'; 

function App() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();  

    console.log("Current User", user);

    return (
      <div className="App">
    <header className="App-header">
        <h3>Hello {user?.name || "Guest"}</h3> {/* Added fallback for when user is undefined */}
        {isAuthenticated ? (
            <button
                style={{
                    borderRadius: '7px',
                    fontSize: '15px',
                    padding: '10px 20px',
                    margin: '10px',
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#dc3545',  
                    cursor: 'pointer'
                }}
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Logout
            </button>
        ) : (
            <button
                style={{
                    borderRadius: '7px',
                    fontSize: '15px',
                    padding: '10px 20px',
                    margin: '10px',
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#007bff', 
                    cursor: 'pointer'
                }}
                onClick={() => loginWithRedirect()}
            >
                Login with Redirect
            </button>
        )}
    </header>
</div>
    );
}

export default App;
