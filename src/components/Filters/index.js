import React, { Component } from 'react';
import Loadable from 'react-loadable';

const MultiSelectCheckBox = Loadable({
    loader: () => import(/* webpackChunkName: "charectors" */ '../MultiSelectCheckbox/index.js'),
    loading: () => <div>loadingj...</div>,
    modules: ['multicheckbox']
});
const speciesFilter = ['Human', 'Mytholog', 'Other species'];
const genderFilter = ['Male', 'Female'];
const originFilter = ['unkonwn']
class filters extends Component {
     
    handleSpeciesSelection(value){

      if(value.target){
        console.log(speciesFilter[value.target.id]);
      }
    }
    handleGenderSelection(value){

      console.log(value);
      if(value.target){
        console.log(genderFilter[value.target.id]);
      }
    }
    handleOriginSelection(value){
      console.log(value);
      if(value.target){
        console.log(originFilter[value.target.id]);
      }
    }
  render() {
    let selected = false;
    return (

    <div className="filter-section">
        <MultiSelectCheckBox id='species' filter={speciesFilter} name="Species"
            type='checkbox' selected={selected}
            onChange={ (value) => { this.handleSpeciesSelection( value); }}
        />
         <MultiSelectCheckBox id='gender' filter={genderFilter} name="Gender"
            type='checkbox' selected={selected}
            onChange={ (value) => { this.handleGenderSelection( value); }}
        />
         <MultiSelectCheckBox id='origin' filter={originFilter} name="Origin"
            type='checkbox' selected={selected}
            onChange={ (value) => { this.handleOriginSelection( value); }}
        />
    </div>
   
    );
  }
};
export default filters;