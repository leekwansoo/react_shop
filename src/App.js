import React, {useState, useEffect} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';

import Data from './data.js';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import Card from './Card.js';


function App() {

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]))
  }, []);

   let [shoes, shoes변경]=useState(Data);
   let [재고,재고변경]=useState([10,11,12]);
   let navigate = useNavigate(); 

  return (
    <div className="App">
      <h2> This is Shoe Shop web site</h2>
  <Navbar bg="light" expand="lg">

  <Container>

    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto">

      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
      <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Routes>
    <>
    <Route exact path="/" element={   
        <div className="main-bg">
          <div className="container">
            <div className="row">
              { shoes.map((a, i)=>{
                return <Card shoes={shoes[i]} i={i} ></Card>
                })}
              </div>
          </div> 
      </div>
    }>

    </Route>

    <Route path="/detail/:id" element= {
        <Detail shoes={shoes} />}>
    </Route>

    <Route path="/cart" element={
        <Cart />}>
    </Route>
    </>
</Routes>

</div>

  )
}

export default App;