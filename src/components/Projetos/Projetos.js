import CardProjetos from "./CardProjeto/CardProjetos"
import "./Projetos.css"
import imgLumina from "../../img/projetosImg/Rectangle 8.svg"
import imgYalle from "../../img/projetosImg/Rectangle 9.svg"
import imgCalculaGasto from "../../img/projetosImg/Rectangle 10.svg"
import imgRouteLog from "../../img/projetosImg/Rectangle 11.svg"
import imgDevJobs from "../../img/projetosImg/Rectangle 12.svg"
import imgValorantStash from "../../img/projetosImg/valorantStash.svg"

function Projetos() {

   return (
      <section id="projetos" className="hidden">
         <h1 className="titulo">Projetos</h1>
         <div className="projetosGrid">
            <CardProjetos
               imgUrl={imgLumina}
               nome="LuminaSound"
               desc="Projeto de estudo para projeto integrador 5. Software de streaming de músicas online focado em música eletronica. Desenvolvido em colaboração com João Zanardo e Pedro Lucas Dall'Igna"
               linkGit="https://github.com/NaTToHen/LuminaSound"
               tags={['React', 'SCSS', 'TS', 'Java', 'AWS S3', "PostgresSQL"]}
            />

            <CardProjetos
               imgUrl={imgYalle}
               nome="Livraria Yalle"
               desc="Projeto de estudo para projeto integrador 3. Site para a livraria Yalle, o sistema possui paginas de administrador e de vendas, feito em colaboração com Pedro Lucas Dall'Igna."
               linkGit="https://github.com/NaTToHen/LivrariaYalle"
               tags={['HTML', 'CSS', 'JS', 'PHP', "MySQL"]}
            />

            <CardProjetos
               imgUrl={imgCalculaGasto}
               nome="CalculaGasto"
               desc="Aplicativo de finanças pessoais, feito para ser simples e rapido. Desenvolvido com o intuito de se aprofundar em desenvolvimento Mobile.
               Foi desenvolvido também o site https://calculagasto.com"
               linkGit="https://github.com/NaTToHen/CalculaGasto"
               linkSite="https://calculagasto.com"
               tags={['Kotlin', 'Firebase', 'Google Cloud']}
            />

            <CardProjetos
               imgUrl={imgDevJobs}
               nome="DevJobs"
               desc="Site de vagas de emprego para desenvolvedores. Foi desenvolvido para se aprofundar em desenvolvimento Web. O site possui cadastro de vagas e empresas, possui pesquisa e opção de se candidatar ás vagas"
               linkGit="https://github.com/NaTToHen/DevJobs"
               tags={['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']}
            />

            <CardProjetos
               imgUrl={imgValorantStash}
               nome="ValoranStash"
               desc="Biblioteca de skin do jogo Valorant, site inspirado no site https://csgostash.com/, ainda em desenvolvimento, a API do site sera publica."
               linkGit="https://github.com/NaTToHen/RouteLog"
               linkSite={"https://valostash.com"}
               tags={['React', 'Laravel', 'PHP', 'MySQL', 'AWS S3']}
            />

            <CardProjetos
               imgUrl={imgRouteLog}
               nome="RouteLog - Gerenciamento de rotas"
               desc="Sistema de gerenciamento logistico, atualmente em desenvolvimento inicial."
               linkGit="https://github.com/NaTToHen/RouteLog"
               tags={['Laravel', 'PHP', 'TS', 'React', 'Electron', 'PostgresSQL']}
            />
         </div>
      </section>
   )
}

export default Projetos