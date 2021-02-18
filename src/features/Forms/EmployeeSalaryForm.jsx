// File: src/features/Form/EmployeeSalaryForm.jsx
// Date: 2/18/2021
// Note: React Controlled and Uncontrolled Forms
import React, { useState } from 'react'

function EmployeeComponent() {
    const [employee, setEmployee] = useState(
        { Id: '', Name: '', Location: '', Salary: ''}
    )

    function handleEmployeeChange(event) {
        setEmployee({
            ...employee, 
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <h3>Employee Component</h3>
            <p>
                <label>Employee ID: &nbsp;
                    <input 
                        type="text" 
                        name="Id" 
                        value={employee.Id} 
                        onChange={handleEmployeeChange}
                    />
                </label>
            </p>
            <p>
                <label>Emplouyee Name: &nbsp;
                    <input 
                        type="text" 
                        name="Name" 
                        value={employee.Name}
                        onChange={handleEmployeeChange}
                    />
                </label>
            </p>
            <p>
                <label>Employee Location: &nbsp;
                    <input 
                        type="text" 
                        name="Location" 
                        value={employee.Location} 
                        onChange={handleEmployeeChange}
                    />
                </label>
            </p>
            <p>
                <label>Employee Salary: &nbsp;
                    <input 
                        type="text" 
                        name="Salary" 
                        value={employee.Salary} 
                        onChange={handleEmployeeChange}
                    />
                </label>
            </p>
            <p> 
                ID: <b>{employee.Id}</b><br />
                Name: <b>{employee.Name}</b><br />
                Location: <b>{employee.Location}</b><br />
                Salary: <b>{employee.Salary}</b>
            </p>
            <SalaryComponent  
                salary={employee.Salary} 
                onSalaryChange={handleEmployeeChange}
            />
        </div>
    )
}

const SalaryComponent = ({salary, onSalaryChange}) => {
    return (
        <div>
            <h3>Salary Component</h3>
            <p>
               <label>Employee Salary: &nbsp;
                    <input 
                        type="text" 
                        name="Salary" 
                        value={salary} 
                        onChange={onSalaryChange}
                    />
               </label>
           </p>
        </div>
    )
}

export default EmployeeComponent;

// eof