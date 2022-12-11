import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardUser() {
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <div>
        <h1>Welcome Mr. Asep Bambang</h1>
        <h2>Have a good day</h2>
      </div>
      <Card style={{ width: "18rem", margin: "20px auto" }}>
        <div
          style={{
            width: "10rem",
            margin: "10px auto",
            border: "1px solid grey",
            borderRadius: "50%",
          }}
        >
          <Card.Img
            variant="top"
            src="./img/vektor.png"
            style={{ borderRadius: "50%" }}
          />
        </div>

        <Card.Body>
          <Card.Title>Asep Bambang</Card.Title>
          <hr />
          <Card.Text>
            <p>
              "Dirimu yang sebenarnya adalah apa yang kamu lakukan disaat tidak
              ada orang yang melihatmu."
            </p>
            <b>Ali bin Abi Thalib</b>
          </Card.Text>
          <hr />
          <Button variant="primary">Start To Work</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardUser;
