import React from 'react';
import './FourColGrid.css';


const FourColGrid = (props) => {

  const renderElements =  () => {
    
  }

  return (
    <div className="rmdb-grid">
      {/* کد زیر میگه لودینگ نباشه و هدری باشه نشونش بده */}
      { !loading && props.header ? <h1>{props.header}</h1> : null }
      <div className="rmdb-grid-content">
        {renderElements()}
      </div>
    </div>
  );
}

export default FourColGrid;