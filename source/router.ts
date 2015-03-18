/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/express/express.d.ts' />

import express = require('express');
import http = require('http');

//import _ = require('lodash');
var _ = require('lodash');

import config = require('./routerConfig');
import directory = require('./routeDirectory');

var externalConfig : config.IRouterConfig = require('./config');

class Router {
    private config : config.IRouterConfig;
    private app : express.Express;
    private server : http.Server;
    //private routingTables : 
    private directory : directory.RouteDirectory;
    
    start() {
        this.config = _.assign(this.getDefaultConfig(), externalConfig);
        
        this.app = express();

        this.configureRouting();
        
        this.listenForRequests();

        this.server = this.app.listen(3000, () => {
            console.log('router listening on ', this.server.address().port);
        });
    }
    
    getDefaultConfig(): config.IRouterConfig {
        return {
            routeTableLocation: './routes',
            environments: [
                'renovo.localhost',
                'dev.renovolive.com',
                'www.renovolive.com',
            ],
        };
    }
    
    configureRouting() {
        this.directory = new directory.RouteDirectory(this.config);
    }
    
    listenForRequests() {
        this.app.get('/*', function(req, res) {
            return res.json({
                message: "I hear you!",
            });
        });
        
        this.app.put('/*', function(req, res) {
            return res.json({
                message: "Are you putting me down?",
            });
        });

        this.app.post('/*', function(req, res) {
            return res.json({
                message: "Time to 'post' back!",
            });
        });
        
        this.app.delete('/*', function(req, res) {
            return res.json({
                message: "The nerve!",
            });
        });
    }
}

module.exports = Router;