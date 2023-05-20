import http from 'http';
import router from './router';

http.createServer(router).listen(8080, () => console.log(`Server running on port 8080`));
