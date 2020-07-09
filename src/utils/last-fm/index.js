import LastFM from 'last-fm';
import config from './config';

const { apiKey } = config;

const lastFM = new LastFM(apiKey, {
  userAgent: 'MyApp/1.0.0 (http://localhost:3000)',
});

export default lastFM;
