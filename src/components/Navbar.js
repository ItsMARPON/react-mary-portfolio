import Nav from 'react-bootstrap/Nav';

function Navbar({currentPage, handlePageChange}) {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
        Resume
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">
        Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;