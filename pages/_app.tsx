import { RelayEnvironmentProvider } from 'react-relay';

import RelayEnvironment from '@/gqlHelpers/RelayEnvironment';

import '../global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
};

export default App;
