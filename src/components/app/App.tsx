import { FC } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import ContactOverlay from '../ux/contactOverlay/ContactOverlay';

const App: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ContactOverlay/>
    </>
  );
}

export default App;
