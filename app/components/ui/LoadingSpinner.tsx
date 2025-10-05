import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className='loading-container'>
      <div className='spinner' />
        
    
      
      {message && (
        <p style={{
          marginTop: '1rem',
          color: '#666',
          fontSize: '14px'
        }}>
          {/* {message} */}
        </p>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;