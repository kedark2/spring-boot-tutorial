import React, { Component } from 'react'
import Services from '../services/Services';

export default class CreateServicesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            serviceName: '',
            servicePrice: 0.0,
            serviceProvider: ''

        }
        this.changeServiceNameHandler = this.changeServiceNameHandler.bind(this);
        this.changeServicePriceHandler = this.changeServicePriceHandler.bind(this);
        this.changeServiceProviderHandler = this.changeServiceProviderHandler.bind(this);
        this.saveOrUpdateService = this.saveOrUpdateService.bind(this);
    }

    componentDidMount() {
        if (this.state.id === "service_add") {
            return
        } else {
            Services.getServicesById(this.state.id).then(res => {
                let service = res.data
                this.setState({
                    serviceName: service.serviceName,
                    servicePrice: service.servicePrice,
                    serviceProvider: service.serviceProvider
                })
            });
        }
    }
    changeServiceNameHandler = (event) => {
        this.setState({ serviceName: event.target.value });
    }
    changeServicePriceHandler = (event) => {
        this.setState({ servicePrice: event.target.value });
    }
    changeServiceProviderHandler = (event) => {
        this.setState({ serviceProvider: event.target.value });
    }
    saveOrUpdateService(e) {
        e.preventDefault();
        let services = { serviceName: this.state.serviceName, servicePrice: this.state.servicePrice, serviceProvider: this.state.serviceProvider };
        console.log('services => ' + JSON.stringify(services));
        console.log(this.state.id)
        if (this.state.id === "service_add") {
            Services.createServices(services).then(res => {
                this.props.history.push('/services')
            });
        } else {
            Services.updateServices(services, this.state.id).then(res => {
                this.props.history.push('/services');
            });
        }

    }
    cancel() {
        this.props.history.push('/services')
    }
    getTitle() {
        if (this.state.id === "service_add") {
            return <h3 className="text-center">Add Service</h3>
        } else {
            return <h3 className="text-center">Update Service</h3>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="serviceName">Service Name:</label>
                                        <input type="text"
                                            placeholder="Service Name"
                                            name="servicename"
                                            className="form-control"
                                            value={this.state.serviceName}
                                            onChange={this.changeServiceNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="servicePrice">Service Price:</label>
                                        <input type="text"
                                            placeholder="Service Price"
                                            name="serviceprice"
                                            className="form-control"
                                            value={this.state.servicePrice}
                                            onChange={this.changeServicePriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="serviceProvider">Service Provider:</label>
                                        <input type="text"
                                            placeholder="Service Provider"
                                            name="serviceprovider"
                                            className="form-control"
                                            value={this.state.serviceProvider}
                                            onChange={this.changeServiceProviderHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateService}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
