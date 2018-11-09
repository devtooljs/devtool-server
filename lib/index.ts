import { initServer } from './server';
import { initCarlo } from './initCarlo';
import { handleMsg } from './handleMsg';
import { initApi } from './api';

(async () => {
    // 初始化与 view通信 api
    // const api = initApi(msg => console.log(msg));

    // debugger;
    // 初始化 carlo
    // await initCarlo(api);
    // await initCarlo(() => {});
    // api.on('view2Node', console.log);
    // api.on('node2View', console.log);
    // debugger;
    // 初始化 websocket
    await initServer(handleMsg);
    // debugger;
})();
