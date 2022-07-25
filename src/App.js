import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
const [data, setData] = useState(null);
const [fetchData, setFetch] = useState(false);
useEffect(() => {
  if (fetchData) {
  axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then((res) => setData(res.data.title));
  }
  }, [fetchData]);
  return (
  <>
  <h1>{data}</h1>
  <button onClick={() => setFetch(true)}>Fetch Data</button>
  </>
  );
  };
  export default App;