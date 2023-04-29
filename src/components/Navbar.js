import Nav from 'react-bootstrap/Nav';

function Navbar({currentPage, handlePageChange}) {
  return (
    <Nav variant="tabs" defaultActiveKey="/abouthome">
      <Nav.Item>
        <Nav.Link href="/abouthome" onClick={() => handlePageChange('AboutHome')}>Home:About</Nav.Link>
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
  );
}

export default Navbar;