import "./Header.css"

function Header() {
  return ( 
    <header className="header">
      <img src="" alt="" className="imgLogo"/>
      <nav className="navMenu">
        <a href="#" className="navLink">Inicio</a>
        <a href="#" className="navLink">Sobre</a>
        <a href="#" className="navLink">Projetos</a>
        <a href="#" className="navLink">Contato</a>
      </nav>
    </header>
  )
}

export default Header