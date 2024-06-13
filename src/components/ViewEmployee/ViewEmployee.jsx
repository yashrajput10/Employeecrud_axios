import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmp, singleEmp } from "../../services/action/employee.action";
import { useNavigate } from "react-router";

function ViewEmployee() {
  const { employees, isLoading, err } = useSelector(
    (state) => state.empReducer
  );
  console.log("emp", employees);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <img
            src="https://idn.blinkstore.in/R_CU3Sf9J6LgGCd3Bin0tAZ0VVc=/320x0/filters:format(png)/xdn.blinkstore.in/uploads/designs/xstore-0gfTubgM-front.svg"
            alt=""
          />
        </div>
        <div class="d-flex justify-content-center lmt">
        <div class=" me-3">
            <span className="fs-1">Loading...</span>
          </div>
          <div class="spinner-border mt-4 me-3" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
         
        
        </div>
        <audio autoPlay>
          <source src="../audio/Ruko_Jara_Sabar_Karo.mp3" type="audio/mpeg" />
        </audio>
      </>
    );
  }
  if (err) {
    return (
      <>
        <p>{err.msg}</p>
      </>
    );
  }

  // const handleEdit = (id) => {

  //     dispatch(singleEmp(id));
  //     navigate("/Edit");
  // }

  // const handleView = (id) => {

  //     dispatch(singleEmp(id));
  //     navigate("/ViewEmpData");
  // }

  // const handleDelete = (id) => {

  //     dispatch(deleteEmp(id));

  // }

  return (
    <section className="v1">
      <div className="card p-4">
        <Table
          responsive
          className="table table-bordered table-striped table-hover "
        >
          <thead className="table-dark">
            <tr className=" text-center ">
              <th>NO.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Number</th>
              <th>Position</th>
              <th>Email</th>
              <th>Password</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {
                    employees.map((emp, index) => {

                        return (
                            <tr key={index} className='text-center'>
                                <td>
                                    {
                                        index + 1
                                    }
                                </td>
                                <td>
                                    {
                                          emp.fname
                                    }
                                </td>
                                <td>
                                    {
                                        emp.lname
                                    }
                                </td>
                                <td>
                                    {
                                        emp.contact
                                    }
                                </td>
                                <td>
                                    {
                                        emp.position
                                    }
                                </td>
                                <td>
                                    {
                                        emp.email
                                    }
                                </td>
                                <td>
                                    {
                                        emp.password
                                    }
                                </td>
                                
                                <td>
                                <Button className='me-3 text-center' variant='dark' onClick={() => handleView(emp.id)}>
                                        View
                                    </Button>
                                    
                                    <Button className='me-3 text-center' variant='dark' onClick={() => handleEdit(emp.id)}>
                                        Edit
                                    </Button>
                                
                                    <Button variant='dark text-center' onClick={() => handleDelete(emp.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                } */}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default ViewEmployee;
