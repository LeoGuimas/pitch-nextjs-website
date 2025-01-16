'use client';

import React from 'react';

const reset = () => {
  // Define your reset logic here
  console.log('Resetting...');
};

const ErrorComponent = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={
        () => reset()
        }
        >Try Again
        </button>
    </div>
  );
};

export default ErrorComponent;