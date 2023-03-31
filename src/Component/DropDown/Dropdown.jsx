import Dropdown from 'react-bootstrap/Dropdown';
import "./Dropdown.css";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant='none' id="dropdown-basic" className='text-[#134072]'>
          PAGES
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item><Link to="/">Home</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/contact">Contact</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about">About</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default BasicExample;