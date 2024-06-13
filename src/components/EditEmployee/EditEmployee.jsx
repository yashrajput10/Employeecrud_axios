import { useState } from "react";
import { Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { updatedata } from "../../services/action/employee.action";
import { useNavigate } from "react-router";

export const EditEmployee = () => {

    const { employee } = useSelector((state) => state.empReducer);

    const [formInput, setFormInput] = useState(employee);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setFormInput({ ...formInput, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Form Data", formInput);

        dispatch(updatedata(formInput));

        setFormInput({
            fname: "",
            lname: "",
            contact:"",
            position:"",
            email: "",
            password: "" 
        })

        navigate("/View");

    }

    return (
        <section  className=" pt-2 d-flex justify-content-center col-12 edits2">
            <Container >
                <Row className="card p-3 col-12">
                        <Form  onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label className="text-black fs-5 ms-1 p-2">First Name</Form.Label>
                                    <Form.Control className="rounded-pill" type="text" placeholder="Enter First Name" value={formInput.fname} name="fname" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="text-black fs-5 ms-1 p-2">Last Name</Form.Label>
                                    <Form.Control className="rounded-pill" type="text" placeholder="Enter last Name" value={formInput.lname} name="lname" onChange={handleChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label className="text-black fs-5 ms-1 p-2">Contact Number</Form.Label>
                                    <Form.Control className="rounded-pill" type="number" placeholder="Enter Contact" value={formInput.contact} name="contact" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="text-black fs-5 ms-1 p-2" >Employee position</Form.Label>
                                    <Form.Control className="rounded-pill" type="text" placeholder="Enter Your Position" value={formInput.position} name="position" onChange={handleChange} />
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label className="text-black fs-5 ms-1 p-2">Email</Form.Label>
                                    <Form.Control className="rounded-pill" type="email" placeholder="Enter email" value={formInput.email} name="email" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="text-black fs-5 ms-1 p-2">Password</Form.Label>
                                    <Form.Control className="rounded-pill" type="password" placeholder="Enter Password" value={formInput.password} name="password" onChange={handleChange} />
                                </Form.Group>
                            </Row>
                           
                            <Button variant="dark" type="submit">
                                Update
                            </Button>
                        </Form>
                    
                </Row>
            </Container>
        </section>
    )

}
