import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    '& > img': {
      flex: '1 0 21%',
      border: 'thin solid #333',
      borderRadius: 10,
      margin: 32,
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    overflow: 'auto',
    height: '60%',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;
