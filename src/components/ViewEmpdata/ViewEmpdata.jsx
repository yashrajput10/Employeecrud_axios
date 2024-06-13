
import { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { singleEmp } from '../../services/action/employee.action';

function ViewEmpdata() {

    const { employee } = useSelector(state => state.empReducer);

    const [formInput] = useState(employee);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handelsubmit = (e) => {
        e.preventDefault();

        dispatch(singleEmp(id));

        navigate("/View");
    }

    return (
        <Form onSubmit={handelsubmit} className='ps-5 pe-5' >
            <Row className='card pt-3'>
                <Table responsive className='table  table-bordered table-hover'>
                    <thead >
                        <tr className='table-dark text-center'>
                            <th>
                                NO.
                            </th>
                            <th>
                               First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Contact Number
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td>
                                1
                            </td>
                            <td> 
                                {formInput.fname}
                            </td>
                            <td>
                                {formInput.lname}
                            </td>
                            <td> 
                                {formInput.contact}
                            </td>
                            <td>
                                {formInput.position}
                            </td>
                            <td> 
                                {formInput.email}
                            </td>
                            <td>
                                {formInput.password}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Form>
    );
}

export default ViewEmpdata;