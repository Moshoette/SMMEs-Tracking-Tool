// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [performances, setPerformances] = useState([]);
  const [newPerformance, setNewPerformance] = useState('');

  useEffect(() => {
    const fetchPerformances = async () => {
      const querysnapshot = await getDocs(collection(db,'performances'));
      const docs = querysnapshot.docs.map(doc => doc.data());
      setPerformances(docs);
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
