import { FC } from 'react';
import { OverlayContextProvider } from '../context/OverlayContext';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import ContactOverlay from '../ux/contactOverlay/ContactOverlay';

const App: FC = () => {
  return (
    <>
      <OverlayContextProvider>
        <Header />
        <ContactOverlay />
      </OverlayContextProvider>
      <Main />
      <Footer />
    </>
  );
}

export default App;
