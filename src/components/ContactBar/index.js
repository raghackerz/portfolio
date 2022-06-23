import React from 'react';

//Styles
import { Wrapper, Image } from './ContactBar.styles';

//Resources
import MAIL from '../../email.png';
import LINKEDIN from '../../linkedin.png';
import GITHUB from '../../github.png';
import TWITTER from '../../twitter.png';

const ContactBar = () => {
  return(
    <Wrapper>
      <Image src={MAIL} draggable='false'/>
      <Image src={LINKEDIN} draggable='false'/>
      <Image src={GITHUB} draggable='false'/>
      <Image src={TWITTER} draggable='false'/>
    </Wrapper>
  );
}

export default ContactBar;
