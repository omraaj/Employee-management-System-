import React, { useEffect, useState } from 'react'
import { FormGroup, Form, FormControl, Button } from "react-bootstrap";
import "./UpdateUser.css";
import { useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {

    const {id}=useParams();
    const navigate =useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

   useEffect(()=>{
    const fetchEmployee= async()=>{
try {
    const response = await fetch(`http://localhost:8080/api/employee/${id}`)
    const data = await response.json();
setFormData(data);
} catch (error) {
    console.error("Error Fetching User",error.message);
}
    }

    fetchEmployee();
   },[id])

 const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:8080/api/employee/${id}`,{
            method:"PATCH",
            headers:{
              "Content-type":"application/json",  
            },
            body:JSON.stringify(formData),
        })

        const data=await response.json();
        // setFormData(data);
        console.log("User updated",data);
        navigate(`/`)
    } catch (error) {
        console.error("error updating employee",error.message);
    }
 }


  return (
    <>
    <div className="center-form">
      <h1>Edit Employee</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasicName">
          <FormControl
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup controlId="formBasicName">
          <FormControl
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup controlId="formBasicName">
          <FormControl
            type="text"
            name="phone"
            placeholder="Enter Your Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup controlId="formBasicName">
          <FormControl
            type="text"
            name="department"
            placeholder="Enter Department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button variant="primary" type="submit" className="w-100">
         Save
        </Button>
      </Form>
    </div>
  </>
  )
}

export default UpdateUser
