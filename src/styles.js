import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  search: {
    padding: 20,
    borderRadius: 10,
    fontSize: 20,
    width: 500,
  },
  artistListing: {
    display: 'flex',
    flexFlow: 'row wrap',
    background: 'lightblue',
    padding: 20,
  },
});

export default useStyles;
