import Nav from 'react-bootstrap/Nav';

function Navbar({currentPage, handlePageChange}) {
  return (
    <div className='nav-container'>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
        </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default Navbar;