import "./Sobre.css"
import fotoSobre from "../../img/fotoSobre.png"

import imgLinkedin from "../../img/linkedin.svg"
import imgGithub from "../../img/gitSobre.svg"
import imgInstagram from "../../img/insta.svg"

function Sobre() {
  return (
    <section id="sobre" className="hidden">
      <h1 className="titulo">Sobre mim</h1>
      <div className="containerSobre">
        <img className="imgSobre" src={fotoSobre} alt=""/>
        <div className="textoSobre">
          <p className="descSobre"> 
          Meu nome é Henrique tenho 21 anos, sou um Desenvolvedor Web e sou apaixonado por desenvolver novas soluções, comecei minha jornada na área de tecnologia em 2021 hoje já obtive uma experiências em Cloud, e desenvolvimento WEB front-end e backend.
          </p>
          <p className="certificacao">Certificado AWS Cloud Practitioner</p>
          <div className="links">
            <a href="https://www.linkedin.com/in/henbonatto/" target="_blank"><img src={imgLinkedin}/></a>
            <a href="https://github.com/NaTToHen" target="_blank"><img src={imgGithub}/></a>
            <a href="https://www.instagram.com/henrique__bonatto/" target="_blank"><img src={imgInstagram}/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre