import "./Footer.css"
import logo from "../../../img/logo.png"

function Footer() {
  return ( 
    <footer className="footer">
      <img src={logo} alt="logo" className="imgLogo"/>
      <nav className="navMenu">
        <a href="#topo" className="navLink">Voltar ao topo</a>
      </nav>
    </footer>
  )
}

export default Footer