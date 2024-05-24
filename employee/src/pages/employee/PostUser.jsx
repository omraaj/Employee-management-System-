import { FormGroup, Form, FormControl, Button } from "react-bootstrap";
import "./PostUser.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
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

     const navigate= useNavigate();




   const handleSubmit = async(e)=>{
    e.preventDefault();
   console.log(formData);
    try {
      const response = await fetch("http://localhost:8080/api/employee",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      });

      const data = await response.json();
         console.log("Employee created",data);
         navigate("/")

    } catch (error) {
      console.log("Error Creating Employee",error.message);
    }
   }

  return (
    <>
      <div className="center-form">
        <h1> Add Employee</h1>
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
  );
};

export default PostUser;
