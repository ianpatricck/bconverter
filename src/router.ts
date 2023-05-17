import { ServerResponse, IncomingMessage } from "http";
import { getRouteData } from './utils/route';
import { converterController } from './usecases/converter';

// Hello World!
const start = (response: ServerResponse) => { 

  let initialContent = {
    Hello: "Welcome to BConverter API ;)",
    description_pt: "Criei esta API para ajudar quem precisa 'converter' dados ou criptografar conteúdo",
    description_uk: "I created this API to help anyone who needs to 'convert' data or encrypt content",
    description_es: "Creé esta API para ayudar a cualquiera que necesite 'convertir' datos o cifrar contenido.",
    description_it: "Ho creato questa API per aiutare chiunque abbia bisogno di 'convertire' dati o crittografare contenuti."
  };

  response.end(JSON.stringify(initialContent));

}

/*
 * Routing application
 *
 */

function router(req: IncomingMessage, res: ServerResponse) {

  // Default response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') start(res); 
  if (req.url && req.url !== '/' && req.url !== '/favicon.ico') {

    const routeData = getRouteData(req.url);

    switch (routeData.route) {

      case "converter":
        converterController.handle(req, res, routeData);
        break;

      default:
        res.statusCode = 404;
        return res.end(JSON.stringify(404));
    }

  }
  
}

export default router;
