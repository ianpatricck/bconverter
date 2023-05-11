import http from 'http';

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    let initialContent = {
      Hello: "Welcome to BConverter API ;)",
      description_pt: "Criei esta API para ajudar quem precisa 'converter' dados ou criptografar conteúdo",
      description_uk: "I created this API to help anyone who needs to 'convert' data or encrypt content",
      description_es: "Creé esta API para ayudar a cualquiera que necesite 'convertir' datos o cifrar contenido.",
      description_it: "Ho creato questa API per aiutare chiunque abbia bisogno di 'convertire' dati o crittografare contenuti."
    };

    res.end(JSON.stringify(initialContent));

  }

});

server.listen(8080, () => console.log(`Server was started at port 8080`));

