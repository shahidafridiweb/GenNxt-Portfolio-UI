'use client'
import { useEffect } from 'react';
import { ghToken } from './Prefix';

const VisitTracker = () => {
//   useEffect(() => {
//     fetch('https://api.github.com/repos/shahidafridiweb/GenNxt-Portfolio-UI/dispatches', {
//       method: 'POST',
//       headers: {
//         'Authorization': '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',
//         'Accept': 'application/vnd.github.v3+json'
//       },
//       body: JSON.stringify({
//         event_type: 'visit'
//       })
//     });
//   }, []);
  useEffect(() => { 
    fetch('https://api.github.com/repos/shahidafridiweb/GenNxt-Portfolio-UI/dispatches', 
    { 
        method: 'POST', 
        headers: { 
            'Authorization': `Bearer ${ghToken}`, 
            'Accept': 'application/vnd.github.v3+json' 
        }, 
            
        body: JSON.stringify({ event_type: 'visit' }) }) 
        .then(response => { 
            if (!response.ok) 
            { throw new Error(`HTTP error! status: ${response.status}`); } return response.json(); }) 
            .then(data => { console.log('Dispatch event triggered:', data); }) 
            .catch(error => { console.error('Error triggering dispatch event:', error); }); 
        }, []);


  return null;
};

export default VisitTracker;
