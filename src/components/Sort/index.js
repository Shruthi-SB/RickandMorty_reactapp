import React from 'react';
import './styles.scss'
export default () => {
    let sortType = ['Ascending', 'Descending'];
    let dropdowns = sortType.map((dp) => {
        return (
            <option value={dp}>{dp}</option>
        );
    });

  return (
     <div className="sort">
         <select>
            <option value="" disabled selected>Sort by ID</option>
            {dropdowns}
        </select>
     </div> 
    
  );
};
