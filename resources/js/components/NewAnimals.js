import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NewAnimals extends Component {

    constructor(props) {
      super (props)
      this.state = {
        name: '',
        danger: '',
        category: '',
        success: '',
      }
      // dar de alta metodos
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmitAnimal = this.handleSubmitAnimal.bind(this);
    }

    EmptyInputs() {
      this.setState({
        name: '',
        danger: '',
        category: '',
        success: '',
      })
    }

    StatusMessage() {
      if (this.state.success == 'success'){
        return (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-success" role="alert">
                Animal fue registrado Exitosamente!
              </div>
            </div>
          </div>
        )
      }
      if (this.state.success == 'false') {
        return (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                Error al registrar Animal
              </div>
            </div>
          </div>
        )
      }
    }

    handleInputChange (event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val })
    }

    handleSubmitAnimal (event) {
      let me = this
      axios.post('/animals/create', {
        name: this.state.name,
        danger: this.state.danger,
        category: this.state.category
      }).then(response => {
                // console.log(response)
                me.EmptyInputs()
                this.setState({ success: 'success' })
                this.props.clickHandler()
            })
      .catch(error => {
                // console.log(error)
                me.EmptyInputs()
                this.setState({ success: 'false' })
          })
      event.preventDefault()
    }

    render() {
        return (
          <div>

            <div className="col-12 text-right mb-3">
              <button className="btn btn-primary" data-toggle="modal" data-target="#NewAnimalModal">Nuevo Animal</button>
            </div>


            <div className="modal fade" id="NewAnimalModal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Nuevo Animal</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    { this.StatusMessage() }
                    <form method="post">
                      <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Peligro:</label>
                        <input type="text" className="form-control" name="danger" value={this.state.danger} onChange={this.handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Categoria:</label>
                        <input type="text" className="form-control" name="category" value={this.state.category} onChange={this.handleInputChange} />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmitAnimal}>Agregar</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        );
    }
}

if (document.getElementById('new-animals')) {
    ReactDOM.render(<NewAnimals />, document.getElementById('new-animals'));
}
