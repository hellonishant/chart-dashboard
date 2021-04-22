import React from 'react';

const Chart = ({ setIsChart }) => {
  return (
    <div>
      <h1>The am charts</h1>
      <button onClick={() => setIsChart(false)}>Back Button</button>
    </div>
  );
};

export default Chart;
