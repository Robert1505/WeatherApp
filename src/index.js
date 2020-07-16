import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app.component';
import './fonts/PlayfairDisplay-VariableFont_wght.ttf';
import './fonts/Rowdies-Bold.ttf'
import './fonts/PTSans-Bold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <div className = "background">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);



