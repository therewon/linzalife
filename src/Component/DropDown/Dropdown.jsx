import Dropdown from 'react-bootstrap/Dropdown';
import "./Dropdown.css";
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='none' id="dropdown-basic">
        PAGES
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/contact">Contact</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/about">About</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;