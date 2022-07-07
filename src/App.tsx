import React from 'react';
import { useState } from 'react';

import './App.css';

import ReportTable from './components/Report';

function App() {
  
  const [data,setData] = useState([
    {timeToEnd: 0, products: 0},
    {timeToEnd: 1, products: 3},
    {timeToEnd: 2, products: 8},
    {timeToEnd: 3, products: 5},
    {timeToEnd: 4, products: 10},
    {timeToEnd: 5, products: 7}
  ])
  
  return (
    <div className="App">
      <ReportTable data={data} />
    </div>
  );
}

export default App;
