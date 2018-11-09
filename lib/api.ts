import { EventEmitter } from 'events';

export const initApi = onMsg => {
    const api = new Api();

    return api;
};

export class Api extends EventEmitter {
    node2View(event, data) {
        this.emit('node2View', event, data);
        return { event, data };
    }

    view2Node(event, data) {
        this.emit('view2Node', event, data);
        return { event, data };
    }
}
