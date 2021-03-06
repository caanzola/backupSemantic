import React, { Component } from 'react'

export default class ClaseDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      instancias: [],
      instanciaBuscada: '',
    };

  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td><a onClick={this.props.onChange.bind(this, inst)} href="#instanciaDetail">{inst}</a></td>
      </tr>
    );
  }

    handleSearchChange(event) {
    this.setState({
      instanciaBuscada :event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriInstancia = this.state.instanciaBuscada;
    console.log(uriInstancia);
    
    let instanciasClase = this.state.instancias.map((obj) => obj.instancia.value);
    console.log(instanciasClase);
    if(instanciasClase.includes(uriInstancia)){
      this.props.onChange(uriInstancia);
    } else {
      alert('No hay ninguna instancia con esta URI que sea de esta clase.');
    }
  }

  componentDidMount() {

    fetch('/query/instancias', {
      method: 'GET',

    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);

      let queryResult = json.results.bindings;

      this.setState({
        instancias: queryResult,
      })


    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>Clase: {this.props.clase}</h3>
          <p>Cantidad de instancias: {this.state.instancias.length}</p>
          <div className="searchDiv">
          <form id="buscadorClases" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" size="100" id="inputBuscadorClases" placeholder="Buscar dentro de Clase" onChange={this.handleSearchChange}/>
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
          <h3>Instancias de la clase</h3>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th align="left" scope="col">Instancia</th>
            </tr>
          </thead>
          <tbody>
            {this.renderInstancias()}
          </tbody>
        </table>
      </div>
    )
  }
}
