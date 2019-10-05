import socketio from "socket.io-client";

const socketApi = (options = {}) =>
  socketio("http://192.168.0.112:3333", options);

export default socketApi;
