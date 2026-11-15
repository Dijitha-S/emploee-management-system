import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { updateEmployee } from '../services/EmployeeService';

const UpdateEmployeeModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        updateEmployee(props.employee.id, e.target).then(
            (result) => {
                alert(result);
                props.setUpdated(true);
                props.onHide();
            },
            () => {
                alert("Failed to Update Employee");
            }
        );
    };

    return (
        <div className="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Employee Information
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={handleSubmit}>

                                <Form.Group controlId="FirstName" className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="FirstName"
                                        required
                                        defaultValue={props.employee.FirstName}
                                    />
                                </Form.Group>

                                <Form.Group controlId="LastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="LastName"
                                        required
                                        defaultValue={props.employee.LastName}
                                    />
                                </Form.Group>

                                <Form.Group controlId="department" className="mb-3">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="department"
                                        required
                                        defaultValue={props.employee.department}
                                    />
                                </Form.Group>

                                <Form.Group controlId="phoneno" className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="phoneno"
                                        required
                                        defaultValue={props.employee.phoneno}
                                    />
                                </Form.Group>

                                <Form.Group controlId="salary" className="mb-3">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="salary"
                                        required
                                        defaultValue={props.employee.salary}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Update Employee
                                </Button>

                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UpdateEmployeeModal;