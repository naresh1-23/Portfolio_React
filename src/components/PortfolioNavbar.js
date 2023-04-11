import { Container, Navbar } from "react-bootstrap";

const PortfolioNavbar = () => {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Naresh Tamang
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end gap-3">
            <Navbar.Text className="text-white">Contact</Navbar.Text>
            <Navbar.Text className="text-white">About</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default PortfolioNavbar;
