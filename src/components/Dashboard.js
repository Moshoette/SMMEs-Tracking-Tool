// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

function Dashboard() {
  const [performances, setPerformances] = useState([]);
  const [newPerformance, setNewPerformance] = useState('');

  useEffect(() => {
    const fetchPerformances = async () => {
      const snapshot = await db.collection('performances').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPerformances(data);
    };

    fetchPerformances();
  }, []);

  const handleAddPerformance = async () => {
    await db.collection('performances').add({ name: newPerformance });
    setNewPerformance('');
    // Optionally fetch data again to update the list
  };

  return (
    <div>
      <h1>Performance Dashboard</h1>
      <input
        type="text"
        placeholder="New Performance"
        value={newPerformance}
        onChange={(e) => setNewPerformance(e.target.value)}
      />
      <button onClick={handleAddPerformance}>Add Performance</button>
      <ul>
        {performances.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
