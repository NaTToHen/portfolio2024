import "./Header.css"
import logo from "../../../img/logo.png"

function Header() {
  return ( 
    <header className="header">
      <img src={logo} alt="logo" className="imgLogo"/>
      <nav className="navMenu">
        <a href="/" className="navLink">Inicio</a>
        <a href="/" className="navLink">Sobre</a>
        <a href="/" className="navLink">Projetos</a>
        <a href="/" className="navLink">Contato</a>
      </nav>
    </header>
  )
}

export default Header