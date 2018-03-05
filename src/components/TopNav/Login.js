import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, Col, Checkbox, ControlLabel, Form } from 'react-bootstrap';


class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { show: false }
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Login Form */}
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                          </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                          </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                            </FormGroup>

                            {/* <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup> */}

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">Sign in</Button>  
                                    <Button type="submit">New User</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        {/* Login Form end */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Login;