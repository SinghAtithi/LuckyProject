import React from 'react';

function Circle({ clr, setCurrColorFunction }) {
      console.log(clr);
      const circleStyle = {
            width: '96px',
            height: '96px',
            backgroundColor: `#${clr}`,
            borderRadius: '50%',
            display: 'inline-block',
            margin: '20px',
            boxShadow: '0 0 10px black'
      };

      return (
            <div style={circleStyle} onClick={() => setCurrColorFunction(clr)}></div>
      );
}

export default Circle;
