

import React, { useEffect } from 'react'
"use client"
const stream = () => {
    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8000/stream');
        eventSource.onmessage = (event) => {
          console.log(event.data);
          // Handle the streamed data here
        };
    
        return () => {
          eventSource.close();
        };
      }, []);
  return (
    <div>stream</div>
  )
}

export default stream