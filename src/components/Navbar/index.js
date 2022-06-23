import React from 'react';

//Styles
import { Wrapper, Element } from './Navbar.styles';

//Navigation
import {Link} from 'react-router-dom';

const Navbar = ({elements}) => {
  return (
        <Wrapper>
          {elements?.map((item) => (
            <Link to={item.path} key={item.name}>
              <Element>{item.name}</Element>
            </Link>
          ))}
        </Wrapper>
  );
}

export default Navbar;
