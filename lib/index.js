"use strict";
class SimplePubSub {
    static get  VERSION() {
        return '1.1.2';
    }

    static get  BAYEUX_VERSION() {
        return '1.0';
    }

    static get  ID_LENGTH() {
        return 160;
    }

    static get  JSONP_CALLBACK() {
        return 'jsonpcallback';
    }

    static get CONNECTION_TYPES() {
        return ['long-polling', 'cross-origin-long-polling', 'callback-polling', 'websocket', 'eventsource', 'in-process', 'tcp'];
    }

    //static get MANDATORY_CONNECTION_TYPES() {
    //    return ['long-polling', 'callback-polling', 'in-process'];
    //}

    //
    static clientIdFromMessages(messages) {
        var connect = [].concat(messages).filter(function (message) {
            return message.channel === '/meta/connect';
        });
        return connect[0] && connect[0].clientId;
    }

    static get NodeAdapter() {
        var nodeAdapter = require('./adapters/node_adapter.js');
        return nodeAdapter;
    }

    static get Channel() {
        var channel = require('./channel.js');
        return channel;
    }

    static get Server() {
        var server = require('./server/server.js');
        return server;
    }

    static get Engine() {
        var engine = require('./engine/engine.js');
        return engine;
    }

    static get Logging() {
        var logging = require('./logging.js');
        return logging;
    }
}

module.exports = SimplePubSub;
