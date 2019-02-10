import React from 'react';
import './FourColGrid.css';


const FourColGrid = (props) => {

  const renderElements =  () => {
    //توی این فانکشن میخواهیم از پراپ استفاده کنیم و لوپ کنیم و به تعداد ان المنت رندر کنیم
    //1. پراپ ها رو بگیرم
    //2. روش لوپ کنم و ی چیزی رندر کنم
    // نتیجه رو بفرستم
    const gridElements = props.children.map( (element, i) => {
      //خوب المنت رو چجوری رندر میکنیم؟
      //علت اضافه شدن ای اینه که داریم روی یه چیزی لوپ میکنیم و ریاکت کلید میخواد برای هر المنت
      return (
        <div key={i} className="rmdb-grid-element">
          
        </div>
      );
    })

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