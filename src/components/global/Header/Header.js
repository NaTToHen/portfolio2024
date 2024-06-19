import "./Header.css"
import logo from "../../../img/logo.png"

function Header() {
  return ( 
    <header className="header">
      <img src={logo} alt="logo" className="imgLogo"/>
      <nav className="navMenu">
        <a href="#topo" className="navLink">Inicio</a>
        <a href="#sobre" className="navLink">Sobre</a>
        <a href="#projetos" className="navLink">Projetos</a>
        <a href="#contato" className="navLink">Contato</a>
      </nav>
    </header>
  )
}

export default Header