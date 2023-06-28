import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    email: ''
  });

  // Simulating data retrieval or API call
  const fetchData = () => {
    // Assuming you fetched the data and received an object
    const fetchedData = {
      name: 'Pratik',
      age: '25',
      email: 'johndoe@example.com'
    };

    setData(fetchedData);
  };

  // Call fetchData to populate data initially
  useState(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Automatic Data Fill</h1>

      <div>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={() => {}} />
      </div>

      <div>
        <label>Age:</label>
        <input type="text" name="age" value={data.age} onChange={() => {}} />
      </div>

      <div>
        <label>Email:</label>
        <input type="text" name="email" value={data.email} onChange={() => {}} />
      </div>
    </div>
  );
};

export default App;
