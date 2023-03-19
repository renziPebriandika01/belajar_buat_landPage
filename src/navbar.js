

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useRef,useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './App.css';

function Navbars() {
  const linkRef = useRef();
 const goto=(ref)=>{
  window.scrollTo({
    top:ref.offsetTop,
    left:0,
    behavior:"smooth"
  });
 }
  return (
    <>    
    {/* awal navbar */}
      <Navbar expand="lg" className='Navbar fw-bold '>
        <Container fluid>
          <Navbar.Brand href="#" className='text-warning'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="contoh"> 
                <Nav.Link  href="#action1" className='nav-link text-warning' onClick={()=>goto(linkRef.current)}>Profil</Nav.Link>
              </div>
              <Nav.Link href="#action2" className='text-warning'>about</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  {/* akhir navbar */}
  {/* awal Jumbotron */}
  <div className="jumbotron ">
  <div className="container ">
    <div className="row ">
    <div class="col-md-6">
        <img src="cid.jpg" className="img-thumbnail rounded-circle fotoCid" alt="myfoto"/>
      </div>
      
        <div className="col-md-6 text-center">
        <h1 className='text-light'>I'm <span className="fw-bold ">cid kagenou</span></h1>
        <Accordion defaultActiveKey="0" className='bg-dark'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tentang Saya</Accordion.Header>
        <Accordion.Body>
        Cid adalah seorang pria muda langsing dengan rambut berwarna hitam dan pendek. Dia mempunyai wajah yang biasa.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Pendiikan</Accordion.Header>
        <Accordion.Body>
        Sebagai siswa dari Midgar Royal Spellsword Academy Cid mengenakan seragam yang terdiri dari jaket blazer biru dongker dengan aksen emas, kemeja putih, dasi, celana panjang biru dongker, dan sepasang sepatu pantofel..
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  </div>
</div>
{/* Akhir Jumbotron */}
{/* awal profil */}
      <div className="text-center text-light profil">
    <h1 className="mt-4 border border-dark border-2 opacity-5" ref={linkRef}>Profil</h1>
    <p className="fs-5">Sebelum bereinkarnasi Cid bernama Minoru Kagenou. Minoru digambarkan sebagai pemuda yang mempunyai wajah yang biasa, dengan warna rambut dan mata hitam. Dia selalu tampak mengantuk, hal ini terbukti dengan adanya kantung hitam dibawah matanya.</p>
    </div>
 {/* akhir profil */}
    
    </>

  );
}

export default Navbars;
