// FaceComponent.js
import React, { useState, useEffect } from 'react';
import './FaceComponent.css';


const FaceComponent = ({ isChatting }) => {
  const [expression, setExpression] = useState('neutral');

  useEffect(() => {
    if (isChatting) {
      setExpression('talking');
      setTimeout(() => setExpression('neutral'), 2000); // Reset expression after 2 seconds
    } else {
      setExpression('neutral');
    }
  }, [isChatting]);

  return (
    <div className={`face ${expression}`}>
      {/* Render the face graphics here */}
    </div>
  );
};

export default FaceComponent;
