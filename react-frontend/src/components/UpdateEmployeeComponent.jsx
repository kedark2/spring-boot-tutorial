import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            let employee = res.data
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastname,
                emailId: employee.emailId
            })
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    updateEmployee(e) {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };

        console.log('employee => ' + JSON.stringify(employee));

    }
    cancel() {
        this.props.history.push('/employees')
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form action="submit">
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name:</label>
                                        <input type="text"
                                            placeholder="First Name"
                                            name="firstname"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text"
                                            placeholder="Last Name"
                                            name="lastname"
                                            className="form-control"
                                            value={this.state.lastname}
                                            onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailaddress">Email ID:</label>
                                        <input type="text"
                                            placeholder="Email Address"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.emailId}
                                            onChange={this.changeEmailHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
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

