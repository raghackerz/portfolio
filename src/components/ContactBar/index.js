import React from 'react';

//Styles
import { Wrapper, Image } from './ContactBar.styles';

//Resources
import MAIL from '../../email.png';
import LINKEDIN from '../../linkedin.png';
import GITHUB from '../../github.png';
import TWITTER from '../../twitter.png';

const ContactBar = ({ exit }) => {
  return(
    <Wrapper>
      <Image src={MAIL} draggable='false' exit={exit} />
      <Image src={LINKEDIN} draggable='false' exit={exit}/>
      <Image src={GITHUB} draggable='false' exit={exit}/>
      <Image src={TWITTER} draggable='false' exit={exit}/>
    </Wrapper>
  );
}

export default ContactBar;
