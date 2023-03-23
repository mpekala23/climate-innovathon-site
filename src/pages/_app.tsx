import { AppProps } from 'next/app';

import '../styles/global.css';
import 'react-awesome-button/dist/styles.css';

const ClimateInnovathon = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default ClimateInnovathon;
