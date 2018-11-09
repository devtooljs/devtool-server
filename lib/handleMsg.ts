import * as WebSocket from 'ws';

const manager: { [key: string]: WebSocket } = {};

export const handleMsg = (ws: WebSocket, msg: string) => {
    const { event, data } = JSON.parse(msg);
    const { clientInfo } = data;
    const { host } = clientInfo;
    const getDevtoolWs = () => manager['devTool'];
    // const getClientWs

    console.log('event ', event);

    switch (event) {
        case 'clientConnected':
            ws.send(event, data.clientInfo);
            manager[host] = ws;
            ws.on('close', _ => delete manager[host]);
            console.log(clientInfo);
            getDevtoolWs().send(
                JSON.stringify({ event, data: { clientInfo } }),
            );
            break;
        case 'devtoolConnected':
            manager['devTool'] = ws;
            break;
        case 'console':
            ws.send(event, data.clientInfo);
            getDevtoolWs().send(JSON.stringify({ event, data }));
            break;
    }
};
