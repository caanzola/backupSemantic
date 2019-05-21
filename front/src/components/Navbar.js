import React, {Component} from 'react';


/**
* This class contains all needed to display the nav bar on top.
<a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}>Graphs</a>
*/
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      onChange: props.onChange
    };
  }
  
  render() {
    return (
      <div className='fixed-top'>
        <nav id='navbar_home' className='navbar navbar-dark bg-dark'>
          
          <a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}></a>
           <a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}></a>
          <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Clases')} href={'#clases'} style={{ color: 'white' }}>Clases</a>
          <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Instancias')} href={'#instancias'} style={{ color: 'white' }}>Instancias</a>
          <a className='nav-item nav-link ' onClick={this.state.onChange.bind(this, 'Propiedades')} href={'#propiedades'} style={{ color: 'white' }} >Propiedades</a>
          <a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}></a>
           <a className='nav-item nav-link' onClick={this.state.onChange.bind(this, 'Viz')} href={'#viz'}></a>
        </nav>
      
      </div>
    );
  }
}