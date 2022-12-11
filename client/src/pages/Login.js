import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import FooterComponent from "../components/FooterComponent";
import axios from "axios";
import { useNavigate, redirect } from "react-router-dom";

function Login() {
  const serverHost = "http://localhost:5000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    axios.post(serverHost, formData).then(() => {});
  }
  useEffect(() => {
    axios.get(serverHost).then((res) => {
      // console.log(res.data)
      setUser(res.data);
    });
  }, []);

  function checkUser() {
    {
      user.map((pengguna) => {
        if (
          email === "asepbambang@gmail.com" &&
          password === pengguna.password
        ) {
          navigate("/admin");
        } else if (email === pengguna.email && password === pengguna.password) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      });
    }
  }
  return (
    <div>
      <div style={{ width: "80rem", margin: "10% auto" }}>
        <Card>
          <Card.Body>
            <div style={{ width: "55%", float: "left" }}>
              <Carousel>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="./img/slide-satu.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Pusat Informasi Perumahan</h3>
                    <p>Dapatkan informasi perumahan secara mudah dan cepat</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="
                  ./img/slide-dua.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Dapatkan pelayanan yang maksimal</h3>
                    <p>
                      Memudahkan anda berkomunikasi dengan pihak pengurus RT
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/slide-tiga.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Pembayaran yang mudah</h3>
                    <p>
                      Membayar tagihan air, keamanan, dan kebersihan secara
                      cepat
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div style={{ width: "40%", float: "right" }}>
              <Form
                onSubmit={(event) => {
                  handleSubmit(event);
                  checkUser();
                }}
              >
                <img
                  src="./img/logo.png"
                  alt=""
                  style={{ width: "400px", margin: "0 10%" }}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Card.Body>
        </Card>
        <FooterComponent />
      </div>
    </div>
  );
}

export default Login;
