import { Col, Container, Row } from "react-bootstrap";

const Detailme = () => {
  return (
    <>
      <Container className="mt-5 text-center" style={{ marginLeft: "110px" }}>
        <Row>
          <Col>
            <div className="card border-0" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">Django Framework</h3>
                <p className="card-text">
                  I have learn django framework from youtube. I also have done
                  many project using django.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card border-0" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">React</h3>
                <p className="card-text">
                  I have learn react from ta Dyno academy. I have dont project
                  by using backend as django and frontend as React
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card border-0" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title">Database</h3>
                <p className="card-text">
                  I have used postgresql as my database for django project to
                  store data. I have knowledge about SQL language.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detailme;
