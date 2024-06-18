import './Tecnologias.css'

import logoJS from '../../img/logos_javascript.svg'
import logoReact from '../../img/logos_react.svg'
import logoPHP from '../../img/logos_php.svg'
import logoLaravel from '../../img/logos_laravel.svg'
import logoSQL from '../../img/logos_mysql.svg'
import logoAWS from '../../img/logos_aws.svg'
import logoKotlin from '../../img/logo_kotlin.svg'
import logoTS from '../../img/logo_TypeScript.svg'

function Tecnologias() {
   return (
      <section id="tecnologias">
         <h1 className="titulo">Tecnologias</h1>
         <div className="tecnologiasGrid">
            <img src={logoJS} alt="JavaScript" />
            <img src={logoTS} alt="TypeScript" />
            <img src={logoReact} alt="React" />
            <img src={logoPHP} alt="PHP" />
            <img src={logoLaravel} alt="Laravel" />
            <img src={logoSQL} alt="SQl" />
            <img src={logoAWS} alt="AWS" />
            <img src={logoKotlin} alt="Kotlin" />
         </div>
      </section>
   )
}

export default Tecnologias