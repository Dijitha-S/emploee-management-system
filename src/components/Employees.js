import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getEmployees } from '../services/EmployeeService';
import "../App.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let mounted = true;

    getEmployees()
      .then(data => {
        if (mounted) {
          setEmployees(data);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">

        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Phone No</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.FirstName}</td>
                <td>{emp.LastName}</td>
                <td>{emp.department}</td>
                <td>{emp.phoneno}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>

        </Table>

      </div>
    </div>
  );
};

export default Employees;