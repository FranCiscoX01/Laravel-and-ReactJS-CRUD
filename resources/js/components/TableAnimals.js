import NewAnimals from './NewAnimals'
import DeleteAnimal from './DeleteAnimal'
import EditAnimal from './EditAnimal'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class TableAnimals extends Component {

    constructor(props) {
      super (props)
      this.state = {
        animals: [],
        edit_animal: {}
      }
      // dar de alta metodos
      this.getAnimals = this.getAnimals.bind(this);
    }

    componentDidMount() {
        this.getAnimals()
    }

    getAnimals() {
      axios.get('/animals/show')
      .then(response => {
        this.setState({
          animals : response.data
        })
        // console.log(response)
      })
      .catch(error => {
        // console.log(error)
      })
    }

    editAnimal(animal) {
      this.setState(
            { edit_animal: animal }
        )
    }

    render() {
        const { animals } = this.state
        return (
            <div className="row">
                <NewAnimals clickHandler={this.getAnimals} />
                <div className="col-12">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Peligro</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      { animals.map((animals) => (
                        <tr>
                          <th scope="row" >{animals.name}</th>
                          <td>{animals.danger}</td>
                          <td>{animals.category}</td>
                          <td>

                            <EditAnimal
                              IDEditAnimal={animals.id}
                              clickUpdateHandler={this.getAnimals}
                            />

                          {/* Llamar funcion de Padre en Hijo */}
                            <button onClick={() => {this.editAnimal(animals)}} type="button" className="btn btn-danger" data-toggle="modal" data-target="#DeleteAnimalModal">
                              <i className="far fa-trash-alt"></i>
                            </button>
                            <DeleteAnimal
                              clickDeleteHandler={this.getAnimals}
                              DeleteAnimal={this.state.edit_animal}
                            />

                          </td>
                        </tr>
                      )) }
                    </tbody>
                  </table>
                </div>
            </div>
        );
    }
}

if (document.getElementById('table-animals')) {
    ReactDOM.render(<TableAnimals />, document.getElementById('table-animals'));
}
