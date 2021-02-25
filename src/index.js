import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

export const initilBookState = {
  booklist: [{
    id: Math.random(0, 100),
  title: 'Harry Potter',
  category: 'Fanatsy',
  },
  {
    id: Math.random(0, 100),
  title: 'Terminator',
  category: 'Sci-Fi',
  },
  {
    id: Math.random(0, 100),
  title: 'Steve Jobs',
  category: 'Biography',
  },
  {
    id: Math.random(0, 100),
  title: 'Psycho',
  category: 'Horror',
  },]
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
