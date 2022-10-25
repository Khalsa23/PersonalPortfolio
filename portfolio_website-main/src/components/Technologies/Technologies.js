import React from 'react';
import { DiReact, DiJava, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experienced many different tools and technologies in my time at school and my internship.
      While I wouldn't say I'm a master of them all, I do have experience with the following:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
          Java, Python, JavaScript, PHP, <br />
          HTML, CSS, SQL, Bash, NRQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks and Libraries</ListTitle>
          <ListParagraph>
          Spring, React, Flask, <br />
          Node.js, Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
          Git, Linux, Docker, Kubernetes, Gradle, 
          Jira, Github, New Relic, Splunk
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
