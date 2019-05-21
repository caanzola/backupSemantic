import React, { Component } from 'react'

export default class Instancias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instancias: [],
      instanciaBuscada: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      instanciaBuscada :event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let uriEntidad = this.state.instanciaBuscada;
    console.log(uriEntidad);
    alert('Buscar ' + uriEntidad);
  }

  renderInstancias() {
    return this.state.instancias.map((inst, i) =>
      <tr>
        <th scope="row">{i}</th>
        <td><a onClick={this.props.onChange.bind(this, inst)} href="#instanciaDetail">{inst}</a></td>
      </tr>
    );
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
        <div className="searchDiv">
          <form id="buscadorInstancias" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" id="inputBuscadorInstancias" placeholder="Buscar Instancia" onChange={this.handleSearchChange}/>
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Instancia</th>
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
