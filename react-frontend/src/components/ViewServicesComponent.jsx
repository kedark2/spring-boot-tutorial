import React, { Component } from 'react'
import Services from '../services/Services'

export default class ViewServicesComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            services: {}

        }
    }
    componentDidMount() {
        Services.getServicesById(this.state.id).then(res => {
            this.setState({ services: res.data })
        })
    }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Services Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label htmlFor="name">Service Name: </label>
                            <div>{this.state.services.serviceName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="price">Service Price: </label>
                            <div>{this.state.services.servicePrice}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="provider">Service Provider: </label>
                            <div>{this.state.services.serviceProvider}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="provider">Service Description: </label>
                            <div>{this.state.services.serviceDescription}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
