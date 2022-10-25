import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To 
          My Portfolio
        </SectionTitle>
        <SectionText>
          Software Engineering student graduating in December '22, <br />
          looking for full time opportunities as an entry level <br /> 
          Software Developer.
        </SectionText>
        <Link href="#about">
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;