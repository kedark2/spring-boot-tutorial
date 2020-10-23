import React, { Component } from 'react';
import Services from '../services/Services';

class ListServicesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: []
        }
        this.addService = this.addService.bind(this);
        this.editService = this.editService.bind(this);
        this.deleteService = this.deleteService.bind(this);
        this.viewService = this.viewService.bind(this);

    }
    componentDidMount() {
        Services.getServices().then((res) => {
            this.setState({ services: res.data })
            console.log(res.data)
        })
        console.log(this.services)
    }
    addService() {
        this.props.history.push('/add-service/_add')
    }
    editService(id) {
        this.props.history.push(`/add-service/${id}`)
    }
    deleteService(id) {
        Services.deleteService(id).then(res => {
            this.setState({ services: this.state.services.filter(service => service.id !== id) });
            this.props.history.push('services')
        });
    }
    viewService(id) {
        this.props.history.push(`/view-service/${id}`)
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Services List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addService}>Add Service</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Price</th>
                                <th>Service Provider</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.services.map(
                                    service =>
                                        <tr key={service.id}>
                                            <td>{service.serviceName}</td>
                                            <td>{service.servicePrice}</td>
                                            <td>{service.serviceProvider}</td>
                                            <td>
                                                <button onClick={() => { this.editService(service.id) }} className="btn btn-info">Update</button>
                                                <button onClick={() => { this.deleteService(service.id) }} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                                                <button onClick={() => { this.viewService(service.id) }} className="btn btn-info" style={{ marginLeft: "10px" }}>View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListServicesComponent;