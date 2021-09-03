import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

const App: React.FC = () => {
    return(
        <>
          <Home />
        </>
    )
} 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

