/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/lodash/lodash.d.ts' />

import fs = require('fs');
import _ = require('lodash');

import config = require('./routerConfig');
//var IRouterConfig = routerConfig.IRouterConfig;

export class RouteDirectory {
    constructor(config : config.IRouterConfig) {
        var routeTableFiles = fs.readdirSync(config.routeTableLocation);
        
        
    }
}