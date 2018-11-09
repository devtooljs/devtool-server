import * as WebSocket from 'ws';

export const initServer = (onMsg: (ws: WebSocket, msg: string) => void) => {
    const wss = new WebSocket.Server({ port: 8088 });

    Object.assign(global, { wss });

    wss.on('connection', ws => {
        ws.on('message', (msg: string) => onMsg(ws, msg));
        ws.on('close', msg => console.log(msg));
    });

    return wss;
};
