import App from 'next/app';
import './styles.css';
import { ApplicationContextProvider } from '../store/application-context';

export default function MyApp({ Component, pageProps }) {
  return (
    <ApplicationContextProvider>
      <Component {...pageProps} />
    </ApplicationContextProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
