import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Sobremim from './components/pages/Sobremim'
import Atuacao from './components/pages/Atuacao'
import Tratamento from './components/pages/Tratamento'
import Contato from './components/pages/Contato'



function App() {

  return (


    <Router>


      <a class="whatsapp-link" href="https://web.whatsapp.com/send?phone=5535999564613" target='_blank' rel="noreferrer">
        <i class="fa fa-whatsapp"></i>
      </a>



      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/sobremim" element={< Sobremim />} />
          <Route path="/atuacao" element={< Atuacao />} />
          <Route path="/tratamento" element={< Tratamento />} />
          <Route path="/contato" element={< Contato />} />

        </Routes>
      </Container>

      <Footer />

    </Router>
  );
}

export default App;