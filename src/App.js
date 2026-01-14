import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/time')
      .then(res => res.json())
      .then(data => setTime(data.serverTime))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>DevBank Frontend</h1>
      <p>Hello, the time at the server is now:</p>
      <p>{time || 'Loading...'}</p>
    </div>
  );
}

export default App;

