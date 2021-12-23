import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hello, my name is Chris! I am currently pursuing an Honours Bachelor of Science as a Computer Science Specialist complemented by a Math Minor.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:chris.fernandes@mail.utoronto.ca'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;