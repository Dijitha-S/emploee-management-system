import axios from 'axios';

export function getEmployees() {
  return axios.get('http://127.0.0.1:8000/employees/')
    .then(response => response.data)
}

export function deleteEmployee(employeeId) {
  return axios.delete('http://127.0.0.1:8000/employees/' + employeeId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addEmployee(employee) {
  return axios.post('http://127.0.0.1:8000/employees/', {
    FirstName: employee.FirstName.value,
    LastName: employee.LastName.value,
    department: employee.department.value,
    phoneno: employee.phoneno.value,
    salary: employee.salary.value
  })
  .then(response => response.data);
}

export function updateEmployee(id, employee) {
  return axios.put('http://127.0.0.1:8000/employees/' + id + '/', {
    FirstName: employee.FirstName.value,
    LastName: employee.LastName.value,
    department: employee.department.value,
    phoneno: employee.phoneno.value,
    salary: employee.salary.value
  })
  .then(response => response.data);
}