import { Container, Row, Col, NavLink} from 'react-bootstrap';


function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container >
        <Row>
          <Col md={6} className="text-center text-md-start p-4 ">
            <p>&copy; 2023 Renzi Febriandika</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
          <h4 className='fw-bold '>yang ga tau reactJs pasti bilangnya ini dibikin pake html css doang wkwkw</h4>
          <NavLink  href="https://web.facebook.com/renzi.febriandika.948?_rdc=1&_rdr">facebook</NavLink>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
