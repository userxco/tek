import React from 'react';
import HeroAbout from './HeroAbout';
import HeaderAbout from './HeaderAbout';
import OurTeam from './OurTeam';
import NoName from './NoName';
import Digital from './Digital';
import OurBlogs from './OurBlogs';
import FooterAbout from './FooterAbout';

const About = () => {
  return (
    <div>
        <HeaderAbout />
        <HeroAbout />
        <OurTeam />
        <NoName />
        <Digital />
        <OurBlogs />
        <FooterAbout />
    </div>
  )
}

export default About