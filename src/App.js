/* 
  Anthony Rojas
  The only thing I didn't feel was nescesary was adding in prop 
  types for this coding challenge, so I disabled the warnings due 
  to the size of this project.
*/

import React, { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import lastFM from './utils/last-fm';
import { ArtistModal, Artist } from './components';

// Styles
import './App.css';
import useStyles from './styles';

// Resources
import logo from './logo.svg';

const App = () => {
  // Define hooks
  const classes = useStyles();
  const [q, setQ] = useState('');
  const [error, setError] = useState();
  const [artists, setArtists] = useState([]);
  const [artistInfo, setArtistInfo] = useState(null);

  // Data accessing methods

  useEffect(() => {
    if (!q) {
      setArtists([]);
      return;
    }
    lastFM.artistSearch({ q }, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.warn('Error with api[artistSearch]: ', err);
        setError('An error has occurred getting artists.');
        return;
      }
      const {
        // meta,
        result,
      } = data;
      setError('Successfully retrieved artist listing.');
      setArtists([...result]);
    });
  }, [q]);

  const getArtistInfo = async (name) =>
    lastFM.artistInfo({ name }, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.warn('Error with api[artistInfo]: ', err);
        setError('An error has occurred getting artist info.');
        return;
      }
      setError('Successfully retrieved artist info.');
      setArtistInfo({ ...data });
    });

  // UI render methods

  const renderArtists = (data) =>
    data &&
    data.length > 0 && (
      <div className={classes.artistListing}>
        {data.map((info) => (
          <Artist {...info} onInfoClick={getArtistInfo} />
        ))}
      </div>
    );

  const renderArtistInfoModal = (data) =>
    data && <ArtistModal {...data} handleClose={() => setArtistInfo(null)} />;

  const renderStatusBar = () =>
    error && (
      <Snackbar
        open
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={5000}
        onClose={() => setError(null)}
        message={error}
      />
    );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Favorite Artist Search</h1>

        <input
          className={classes.search}
          onChange={({ target: { value } }) => setQ(value)}
          value={q}
          placeholder="Search for your favorite artist..."
        />
      </header>
      {renderArtists(artists)}
      {renderArtistInfoModal(artistInfo)}
      {renderStatusBar()}
    </div>
  );
};

export default App;
