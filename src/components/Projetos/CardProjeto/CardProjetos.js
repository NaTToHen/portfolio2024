import "./CardProjetos.css"
import imgGit from "../../../img/imgGit.svg"
import imgLink from "../../../img/imgLink.svg"

function CardProjetos({ imgUrl, nome, desc, linkGit, tags, linkSite }) {

   return (
      <div className="cardProjeto">
         <img className="imgProjeto" src={imgUrl} alt="imgProjeto" />
         <div className="infoProjeto">
            <h1 className="nomeProjeto">{nome}</h1>
            <p className="descProjeto">{desc}</p>
            <div className="linksProjeto">
               <div className="tagsProjeto">
                  {tags.map((tag) => (
                     <span className="tagProjeto">{tag}</span>
                  ))}
               </div>
               <div className="links">
                  {
                     linkSite && (
                        <a href={linkSite} target="_blank"><img src={imgLink} alt="linkSite" /></a>
                     )
                  }
                  <a href={linkGit} target="_blank"><img src={imgGit} alt="linkGitHub" /></a>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default CardProjetos