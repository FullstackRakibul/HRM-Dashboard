import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://202.22.203.92:3100";
//const URL = 'http://192.168.61.40:3000';

export const socket = io.connect(URL, {
  transports: ["websocket"],
  reconnectionAttempts: 15, //Nombre de fois qu'il doit réessayer de se connecter
});
