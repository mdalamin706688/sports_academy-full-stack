import React, { useEffect, useState } from 'react';
import { get } from '../src/services/api';

const App = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes from your API endpoint
    const fetchClasses = async () => {
      try {
        const responseData = await get('/classes');
        setClasses(responseData);
      } catch (error) {
        // Handle any errors
        console.error('Error:', error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      {/* Render your classes data */}
      {classes.map((classItem) => (
        <div key={classItem._id}>
          <h2>{classItem.name}</h2>
          <p>Instructor: {classItem.instructor}</p>
          <p>Seats: {classItem.seats}</p>
          <p>Price: {classItem.price}</p>
          <p>Status: {classItem.status}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
