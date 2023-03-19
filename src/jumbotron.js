import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css'
import Accordion from 'react-bootstrap/Accordion';

const Jumbotron = ()=> {
    return(
    <>
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
</>
    )
}

export default Jumbotron;