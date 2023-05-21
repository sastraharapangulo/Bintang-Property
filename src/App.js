import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { shades } from './theme';
import Footer from './components/Footer';
import Property from './pages/Property';
import NoPages from './components/NoPages';

function App() {
  return (
    <ThemeProvider theme={shades}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<NoPages />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/property" element={<Property />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
