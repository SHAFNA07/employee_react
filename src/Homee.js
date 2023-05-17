import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import  Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Homee() {

    const [employees,setEmployees]=useState([])

//api call

const fetchEmployees=async()=>{
    const result=await axios.get('http://localhost:8000/getEmployees')
    setEmployees(result.data.message);
}
console.log(employees);

useEffect(()=>{
    fetchEmployees()
},[])


    return (
        <div className='p-3'>
            <Row>
                <Col lg={6} className='ms-3'>
                    <div className='w-100 border text-center container bg-info text-white p-4 mt-3'>
                    <h2 className='text-center p-3'>Employee Management App</h2>
                    <p>HR and payroll management departments share a lot in common, and when these two systems do not talk to one another, you end up spending your time populating the same information in multiple systems.</p>
                    
                    <Link to={'/add'}>
                    <Button variant="primary" className='fs-5'>
                        <i class="fa-solid fa-user-plus"></i>Add a new Employee
                    </Button>
                    </Link>
                    

                    </div>
                </Col>
                <Col lg={5}>
             <Image style={{height:'300px',display:'flex'}} className='w-100 ms-1 ' src='data:image/jpeg;base64,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' roundedCircle></Image>
                    
                </Col>
            </Row>

            <div className='container-fluid mt-3 bg-info p-2 border'>
                <h3 className='text-center p-3'> List of Employees</h3>
                <Table striped bordered hover variant='success' className='text-center'>
                    <thead>
                        <tr className='text-dark'>
                            <th>#</th>
                            <th>id</th>
                            <th>Full Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Experience</th>
                            <th>Actions</th>

                        </tr>
                    </thead>

                    {
                        employees?.map((employee,index)=>(


                            <tr>
                            <td>{index}</td>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.experience}</td>
                            <td className='text-center'>

                   <ButtonGroup size="md" className="mb-2 p-2 ms-3">
                    <Link to={`edit/${employee.id}`}>
                    <Button variant="success">
                        <i class="fa-solid fa-user-pen"></i>Edit
                    </Button>
                    </Link>
                    <Link to={`view/${employee.id}`}>
                    <Button variant="warning">
                        <i class="fa-solid fa-address-card"></i>View
                    </Button>
                    </Link>
                    <Link>
                    <Button variant="danger">
                        <i class="fa-solid fa-user-xmark"></i>Delete
                    </Button></Link>

                   </ButtonGroup>


                            </td>
                        </tr>
                        ))
                    }
                    <tbody className='fs-4'>

                    </tbody>

</Table>

</div>

</div>
)
}

export default Homee
    
                       