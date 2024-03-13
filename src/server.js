import http from 'http';
import config from './config.js';
import app from './app.js';
import { init } from './socket.js';
import 'dotenv/config';
import { loggerDev, loggerProd } from './config/logger.js';

const PORT = process.env.PORT || 8080;
// const HOST = process.env.HOST || "http://localhost"

// export const ENVIROMENT = 'LOCAL' // 'INTERNET'
// export const ENVIROMENT = 'INTERNET' // 'LOCAL'

export let enviroment;

if (parseInt(PORT) === 8080) {
  enviroment = 'LOCAL'
} else {
  enviroment = 'INTERNET'
}

loggerDev.info(`Enviroment ${enviroment}`)
const httpServer = app.listen(PORT, () => {
  // req.logger.info(`Server running on http://localhost:${PORT} 🚀`)
  if (enviroment === 'LOCAL') {
    loggerDev.info(`Server running on ${config.host.localhost} 🚀`)
  }
  else {
    loggerDev.info(`Server running on ${config.host.host}:${PORT} 🚀`)
  }

});

await init(httpServer);
// server.listen(PORT, () => {
//   console.log(`Server running in http://localhost:${PORT} 🚀`);
// });
