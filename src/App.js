import React, { Component } from 'react';
import Loadable from 'react-loadable';
import 'regenerator-runtime/runtime';

import './styles/global.scss';

import './App.css';

const CharComponent = Loadable({
    loader: () => import(/* webpackChunkName: "charectors" */ './components/Charactors/index.js'),
    loading: () => <div>loading...</div>,
    modules: ['charectors']
});

const SortComponent = Loadable({
    loader: () => import('./components/Sort/index.js'),
    loading: () => <div>loading..</div>,
    modules: ['sort']
});

const FilterTypes = Loadable({
    loader: () => import('./components/Filters/index.js'),
    loading: () => <div> loading... </div>,
    modules: ['filters']
});

class App extends Component {

    render() {
        
        return (
            <div className="App">
                <header>
                    <h1>
                        Rick and Morty <span>React</span> App
                    </h1>
                </header>
                <div className='row-content'>
                <div className='filters-column' >
                    <h1>Filters</h1>
                    <FilterTypes a='a'/>
                </div>
                <div className='charactors'>
                    <div classname='settings'>
                       <SortComponent/> 
                    </div>
                    <div className='details'>
                    <CharComponent /> 
                    </div>
                </div>
                                       
                </div>
                </div>
        );
    }
}
export default App;

