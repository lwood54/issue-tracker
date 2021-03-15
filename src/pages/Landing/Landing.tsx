import React from 'react';
import Container from '@material-ui/core/Container';
import { AddIssue } from '../../components/AddIssue';

const Landing = () => {
  return (
    <Container maxWidth="lg">
      <AddIssue />
    </Container>
  );
};

export default Landing;
