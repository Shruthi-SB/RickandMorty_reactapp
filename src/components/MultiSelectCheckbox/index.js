import React from 'react';

export default  (props) => {
 
    let filterValues = props.filter;
    let options = filterValues.map((option, i) => {
    return (
        <div className={props.id} key={props.id+i}>
          
          <label htmlFor={props.id + option}>
            <input id={i}  type={props.type} selected={props.selected}
                onChange={props.onChange}
            />
            {option}
          </label>
        </div>
      );
    });
    return (
      <div className='group'>
        <h3 >{props.name}</h3>
        {options}
      </div>
    );
};
