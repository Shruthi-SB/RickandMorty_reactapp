import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.scss'
export default () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const page =  1;

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const apiResponse = await api.get(`/`);

      setCharacters(apiResponse.data.results);
      setLoading(false);
    }

    loadData();
  }, [ page]);

    function getCreatedYear(d){
    let cd = new Date(d);
    let td = new Date();
    
    return (td.getFullYear() - cd.getFullYear());
  }

  return (
    <>
      
      {loading ? (
          <div />
        ) : (
          characters.map(char => (
            <div className='charactor' key={char.id} >
              <img src={char.image} alt={char.name} />
              <div className='info'>
                  <div className='title'>
                    <h1>{char.name}</h1> 
                    <p>id::{char.id}
                      <span>created {getCreatedYear(char.created)} years ago</span>
                    </p>
                  </div>
                  
                  <div className="row">
                    <div className="column" ><p>STATUS</p></div>
                    <div className="column val" ><p>{char.status}</p></div>
                  </div>
                  <div className="row">  
                    <div className="column" ><p>SPECIES</p></div>
                    <div className="column val" ><p>{char.species}</p></div>
                  </div>
                  <div className="row">
                    <div className="column" ><p>GENDER</p></div>
                    <div className="column val" ><p>{char.gender}</p></div>
                  </div>
                  <div className="row">
                    <div className="column" ><p>ORIGIN</p></div>
                    <div className="column val" ><p>{char.origin.name}</p></div>
                  </div>
                  <div className="row">
                    <div className="column" ><p>LAST LOCATION</p></div>
                    <div className="column val" ><p>{char.location.name}</p></div>
                  </div>
                </div>
              
            </div>
          ))
        )}
    </>
  );
};
