import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Global from './components/Global';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Global />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));


//ReactDOM.render(<div>My First React app</div>, document.getElementById('root'));

registerServiceWorker();
