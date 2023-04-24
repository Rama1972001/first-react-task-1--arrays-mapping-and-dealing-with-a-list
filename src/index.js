import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = [
  { name: 'Ahmad', age: 30 },
  { name: 'Yousef', age: 12 },
  { name: 'Shatha', age: 14 },
  { name: 'Rana', age: 22 },
  { name: 'Osama', age: 22 },
  { name: 'Ahmad', age: 38 }
];

ReactDOM.render(<App data={data} />, document.getElementById('root'));
