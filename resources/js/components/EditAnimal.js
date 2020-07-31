import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class EditAnimal extends Component {
    constructor(props) {
      super (props)
      this.state = {
        name: '',
        danger: '',
        category: '',
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.getAnimalByID = this.getAnimalByID.bind(this);
    }

    getAnimalByID() {
      axios.get(`/animals/edit/${this.props.IDEditAnimal}`)
      .then(response => {
        console.log(response)
        this.setState({
          name: response.data.name,
          danger: response.data.danger,
          category: response.data.category
        })
      })
      .catch(error => { console.log(error) })
    }

    handleInputChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({
        [nam]: val
      })
    }

    onSubmitUpdateAnimal(event) {
      axios.put(`/animals/update/${this.props.IDEditAnimal}`, {
        new_name: this.state.name,
        new_danger: this.state.danger,
        new_category: this.state.category
      }).then(response => {
        // console.log(response)
        $('#EditAnimalModal').modal('hide')
        this.props.clickUpdateHandler()
      }).catch(error => {
        // console.log(error)
      })
    }

    render() {
        return (
            <div>
              <button onClick={() => {this.getAnimalByID()}} type="button" className="btn btn-primary" data-toggle="modal" data-target="#EditAnimalModal">
                <i className="far fa-edit"></i>
              </button>
              <div className="modal fade" id="EditAnimalModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal Edition</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
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
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary" onClick={() => {this.onSubmitUpdateAnimal()}}>Edit</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        );
    }
}

if (document.getElementById('edit-animal')) {
    ReactDOM.render(<EditAnimal />, document.getElementById('edit-animal'));
}
