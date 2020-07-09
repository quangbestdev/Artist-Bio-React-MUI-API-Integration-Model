import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

const Artist = ({ name, onInfoClick }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.artist}
      role="button"
      onClick={() => onInfoClick(name)}
      onKeyDown={() => onInfoClick(name)}
      tabIndex={0}
    >
      <h6>{name}</h6>
      <Button
        variant="outlined"
        color="default"
        component="button"
        onClick={() => onInfoClick(name)}
      >
        More info
      </Button>
    </div>
  );
};

export default Artist;
