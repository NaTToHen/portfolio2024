import "./Contato.css"

function Contato() {
   return (
      <section id="contato">
         <h1 className="titulo">Contato</h1>

         <div className="contatoContainer">
            <div className="textosContato">
               <h1>Entre em contato</h1>
               <h2><strong>Email: </strong>henriquebonatto008@hotmail.com</h2>
               <h2><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/henriquebonatto/" target="_blank">https://www.linkedin.com/in/henriquebonatto/</a></h2>
               <h2><strong>GitHub: </strong><a href="https://github.com/NaTToHen" target="_blank">https://github.com/NaTToHen</a></h2>
            </div>
            <form className="formContato" action="https://formsubmit.co/henriquebonatto008@hotmail.com" method="POST" enctype="multipart/form-data">
               <input type="hidden" name="_subject" value="Novo contato" />
               <input type="hidden" name="_next" value="https://henriquebonatto.com.br" />
               <input type="hidden" name="_captcha" value="false" />
               <input type="hidden" name="_template" value="box" />

               <input type="text" name="nome" id="nome" placeholder="Nome" required />
               <input type="email" name="Email" id="email" placeholder="Seu email" required />
               <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Mensagem" required></textarea>
               <button type="submit">Enviar email</button>
            </form>
         </div>
      </section>
   )
}

export default Contato