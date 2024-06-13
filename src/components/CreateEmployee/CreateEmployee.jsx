import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createEmp } from "../../services/action/employee.action";
import { useNavigate } from "react-router";

export const CreateEmployee = () => {
  const [formInput, setFormInput] = useState({
    fname: "",
    lname: "",
    contact: "",
    position: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uid = Math.floor(Math.random() * 1000);

    const NewEmp = { ...formInput, id: uid };

    dispatch(createEmp(NewEmp));

    setFormInput({
      fname: "",
      lname: "",
      contact: "",
      position: "",
      email: "",
      password: "",
    });

    navigate("/View");
  };

  return (
    <>
      <section className="d-flex">
        <section className="col-4  overflow-sm-hidden col-lg-7">
          <Container className="ms-4">
            <Row>
              <div className="card p-3 mt-2 ms-5 p-lg-5 col-8 col-lg-10 ">
                <Form onSubmit={handleSubmit}>
                  <span className="panimation fs-6">employee Form...</span>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label className="fs-6 p-1">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        value={formInput.fname}
                        name="fname"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label className="fs-6 p-1">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last Name"
                        value={formInput.lname}
                        name="lname"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label className="fs-6 p-1">
                        Contact Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Contact"
                        value={formInput.contact}
                        name="contact"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label className="fs-6 p-1">
                        Employee position
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Position"
                        value={formInput.position}
                        name="position"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label className="fs-6 p-1">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={formInput.email}
                        name="email"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label className="fs-6 p-1">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={formInput.password}
                        name="password"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Row>

                  <Button className="mt-3 but" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Row>
          </Container>
        </section>
        <section className="col-6  col-lg-5">
          <div className="card mt-2 pb-5">
            <p className="panimation">FULL STACK WEB DEVELOPMENT...</p>
            <div className="body-2 ">
              <div class=" container-1">
                <div class="box">
                  <div class="imgBx">
                    <img src="https://tsh.io/wp-content/uploads/2019/05/node-js-injection_.jpg" />
                  </div>
                  <div class="content">
                    <div>
                      <h2>NODE JS</h2>
                      <p>
                        Developers use Node. js to create server-side web
                        applications, and it is perfect for data-intensive
                        applications since it uses an asynchronous, event-driven
                        model.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="imgBx">
                    <img src="https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F39d6cef5649ed5c35b1420198a362baf1bff97a6-1280x939.jpg&w=1080&q=75" />
                  </div>
                  <div class="content">
                    <div>
                      <h2>REACT JS</h2>
                      <p>
                        React is a JavaScript library developed by Facebook
                        which, among other things, was used to build
                        Instagram.com. It aims to allow developers to create
                        fast user interfaces for websites and applications alike
                        easily.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="box">
                  <div class="imgBx">
                    <img src="https://i.pcmag.com/imagery/reviews/02Q6yxveinggAu3PomearaV-7.fit_scale.size_760x427.v1569481734.jpg" />
                  </div>
                  <div class="content">
                    <div>
                      <h2>MONGODB</h2>
                      <p>
                        MongoDB is built on a scale-out architecture that has
                        become popular with developers of all kinds for
                        developing scalable applications with evolving data
                        schemas. As a document database.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="imgBx">
                    <img src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/61143444834cd54b9b0a88b3_2.png" />
                  </div>
                  <div class="content">
                    <div>
                      <h2>JAVASCRIPT</h2>
                      <p>
                        JavaScript is a scripting or programming language that
                        allows you to implement complex features on web pages —
                        every time a web page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
