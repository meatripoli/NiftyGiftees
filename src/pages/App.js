import React from 'react';
import '../styles/App.css';


function App(props) {
  return (<>
    {/* <Helmet>
      <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>
    </Helmet> */}
    <div className="App">
      <header className="App-header">
        <h1>{props.name}</h1>
      </header>
      <body className="App-body">  
        <script src="https://apis.google.com/js/platform.js" async defer></script>    
      </body>
    </div>
    </>);
}

export default App;
