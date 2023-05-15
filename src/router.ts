import { ServerResponse, IncomingMessage } from "http";

// Hello World!
const start = (response: ServerResponse) => {

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json'); 

  let initialContent = {
    Hello: "Welcome to BConverter API ;)",
    description_pt: "Criei esta API para ajudar quem precisa 'converter' dados ou criptografar conteúdo",
    description_uk: "I created this API to help anyone who needs to 'convert' data or encrypt content",
    description_es: "Creé esta API para ayudar a cualquiera que necesite 'convertir' datos o cifrar contenido.",
    description_it: "Ho creato questa API per aiutare chiunque abbia bisogno di 'convertire' dati o crittografare contenuti."
  };

  response.end(JSON.stringify(initialContent));

}

function router(req: IncomingMessage, res: ServerResponse) {
  
  if (req.url === '/') start(res);

}

export default router;
