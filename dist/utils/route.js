"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouteData = void 0;
const getRouteData = (url) => {
    let URL_SPLITTED = url.split('/');
    URL_SPLITTED.shift();
    return {
        route: URL_SPLITTED[0],
        rule: URL_SPLITTED[1],
        value: URL_SPLITTED[2],
    };
};
exports.getRouteData = getRouteData;
