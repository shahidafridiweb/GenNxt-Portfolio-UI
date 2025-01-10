'use client'
import { useEffect } from 'react';
import { ghToken } from './Prefix';

const VisitTracker = () => {
    useEffect(() => { const timestamp = new Date().toISOString(); fetch('https://api.github.com/repos/<your-username>/<your-repo>/dispatches', { method: 'POST', headers: { 'Authorization': `Bearer ${ghToken}`, 'Accept': 'application/vnd.github.v3+json' }, body: JSON.stringify({ event_type: 'visit', client_payload: { timestamp: timestamp } }) }) .then(response => { if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); } return response.json(); }) .then(data => { console.log('Dispatch event triggered:', data); }) .catch(error => { console.error('Error triggering dispatch event:', error); }); }, []);
    console.log("Test");
    

  return null;
};

export default VisitTracker;
