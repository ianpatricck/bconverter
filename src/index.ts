import http from 'http';
import router from './router';

http.createServer(router).listen(8080, () => console.log(`Server was started at port 8080`));

