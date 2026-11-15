import React, { useEffect, useState } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getEmployees, deleteEmployee } from '../services/EmployeeService';
import AddEmployeeModal from './AddEmployeeModal';
import UpdateEmployeeModal from './UpdateEmployeeModal';

const Manage = () => {
    const [employees, setEmployees] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editEmployee, setEditEmployee] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;

        if (employees.length && !isUpdated) {
            return;
        }

        getEmployees().then(data => {
            if (mounted) {
                setEmployees(data);
            }
        });

        return () => {
            mounted = false;
            setIsUpdated(false);
        };
    }, [isUpdated, employees]);

    const handleUpdate = (e, emp) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditEmployee(emp);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, employeeId) => {
        if (window.confirm('Are you sure?')) {
            e.preventDefault();

            deleteEmployee(employeeId).then(
                (result) => {
                    alert(result);
                    setIsUpdated(true);
                },
                () => {
                    alert('Failed to Delete Employee');
                }
            );
        }
    };

    const AddModelClose = () => setAddModalShow(false);
    const EditModelClose = () => setEditModalShow(false);

    return (
        <div className="container-fluid side-container">
            <div className="row side-row">
                <p id="manage"></p>

                <Table
                    striped
                    bordered
                    hover
                    className="react-bootstrap-table"
                    id="dataTable"
                >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th>Phone No</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.FirstName}</td>
                                <td>{emp.LastName}</td>
                                <td>{emp.department}</td>
                                <td>{emp.phoneno}</td>
                                <td>{emp.salary}</td>

                                <td>
                                    <Button
                                        className="mr-2"
                                        variant="danger"
                                        onClick={(event) =>
                                            handleDelete(event, emp.id)
                                        }
                                    >
                                        <RiDeleteBin5Line />
                                    </Button>

                                    <span>&nbsp;&nbsp;&nbsp;</span>

                                    <Button
                                        className="mr-2"
                                        variant="primary"
                                        onClick={(event) =>
                                            handleUpdate(event, emp)
                                        }
                                    >
                                        <FaEdit />
                                    </Button>

                                    <UpdateEmployeeModal
                                        show={editModalShow}
                                        employee={editEmployee}
                                        setUpdated={setIsUpdated}
                                        onHide={EditModelClose}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant="primary" onClick={handleAdd}>
                        Add Employee
                    </Button>

                    <AddEmployeeModal
                        show={addModalShow}
                        setUpdated={setIsUpdated}
                        onHide={AddModelClose}
                    />
                </ButtonToolbar>
            </div>
        </div>
    );
};

export default Manage;