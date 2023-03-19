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
          <h4 className='fw-bold '>kenapa pas nekan About ga nge scroll kebawah,karena gw belum ngerti Forward useRef wkwkkw (beda component)
          && tombol searchnya ga gw aktifin karena ga tau mau apa yg di search wkwkwkw  contentnya masih dikit jirrrr</h4>
          <NavLink  href="https://web.facebook.com/renzi.febriandika.948?_rdc=1&_rdr">facebook</NavLink>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
