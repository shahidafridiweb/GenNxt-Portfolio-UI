'use client'
import { useEffect } from 'react';

const VisitTracker = () => {
  useEffect(() => {
    fetch('https://api.github.com/repos/shahidafridiweb/GenNxt-Portfolio-UI/dispatches', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        event_type: 'visit'
      })
    });
  }, []);

  console.log('Visit tracked');

  return null;
};

export default VisitTracker;
