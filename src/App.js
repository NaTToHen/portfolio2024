import Contato from "./components/Contato/Contato";
import Footer from "./components/global/Footer/Footer";
import "./components/global/global.css";

import Header from "./components/global/Header/Header";
import Projetos from "./components/Projetos/Projetos";
import Sobre from "./components/Sobre/Sobre";
import Tecnologias from "./components/Tecnologias/Tecnologias";
import Topo from "./components/Topo/Topo";

function App() {
  return (
    <>
      <Header />
      <Topo />
      <Sobre />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
