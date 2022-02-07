import React, { useState } from 'react';
import  {MenuDrop}  from './MenuDrop';
import './../../assets/scss/bootstrap/_dropdown.scss';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        onClick={()=>setDropdown(!dropdown)}
        className={dropdown ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        
        {MenuDrop.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;