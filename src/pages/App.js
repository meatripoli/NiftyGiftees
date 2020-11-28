import React from 'react';
import '../styles/App.css';
import {Helmet} from "react-helmet";

function App(props) {
  return (<>
    <Helmet>
      <meta name="google-site-verification" content="foj5RCU5Qt108gh3kdWrRPBkgD_xDA48xoqeKqtinMQ" />
    </Helmet>
    <div className="App">
      <header className="App-header">
        <h1>{props.name}</h1>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </header>
      <body className="App-body">  
        
        <script src="https://apis.google.com/js/platform.js" async defer></script>    
      </body>
    </div>
    </>);
}

export default App;
