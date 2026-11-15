import React from 'react';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { addEmployee } from '../services/EmployeeService';

const AddEmployeeModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        addEmployee(e.target).then(
            (result) => {
                alert(result);
                props.setUpdated(true);
                props.onHide();
            },
            () => {
                alert("Failed to Add Employee");
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
                        Fill In Employee Information
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
                                    />
                                </Form.Group>

                                <Form.Group controlId="LastName" className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="LastName"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="department" className="mb-3">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="department"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="phoneno" className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="phoneno"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="salary" className="mb-3">
                                    <Form.Label>Salary</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="salary"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Add Employee
                                    </Button>
                                </Form.Group>

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

export default AddEmployeeModal;