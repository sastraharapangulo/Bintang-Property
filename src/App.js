import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { shades } from './theme';
import Footer from './components/Footer';
import Property from './pages/Property';
import NoPages from './components/NoPages';
import WhatsApp from './components/WhatsApp';
import PropertyDetail from './pages/PropertyDetail';
import AboutUs from './pages/AboutUs';
import News from './pages/News';

function App() {
  return (
    <ThemeProvider theme={shades}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="property">
              <Route index element={<Property />} />
              <Route path=":userId" element={<PropertyDetail />} />
            </Route>
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<NoPages />} />
          </Route>
        </Routes>
        <WhatsApp />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
