import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DeleteAnimal extends Component {
    constructor(props) {
      super (props)

      this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick() {
      axios.delete(`/animals/delete/${this.props.DeleteAnimal.id}`)
      .then(response => {console.log(response)})
      .catch(error => {console.log(error)})

      this.props.clickDeleteHandler()

      $('#DeleteAnimalModal').modal('hide')
    }

    render() {
        return (
            <div>

              <div className="modal fade" id="DeleteAnimalModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">¿Quieres eliminar a ... </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="text-center">
                        <h1 className="display-4">{this.props.DeleteAnimal.name}</h1>
                        <p className="lead font-weight-bold">Peligro: {this.props.DeleteAnimal.danger}</p>
                        <p className="lead font-italic">Categoria: {this.props.DeleteAnimal.category}</p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-danger" onClick={() => {this.handleDeleteClick()}}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        );
    }
}

if (document.getElementById('delete-animal')) {
    ReactDOM.render(<DeleteAnimal />, document.getElementById('delete-animal'));
}
