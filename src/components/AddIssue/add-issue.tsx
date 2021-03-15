import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 250,
  },
  media: {
    height: 140,
  },
});

const AddIssue = () => {
  const { root, media } = useStyles();
  return (
    <Card className={root}>
      <Container>
        <CardContent>Stuff...</CardContent>
      </Container>
    </Card>
  );
};

export default AddIssue;
