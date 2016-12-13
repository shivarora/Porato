"use strict";

import config from "./config.json";
import express from "express";
import path from "path";
import  bodyParser from "body-parser";

var app = express();
var exphbs  = require('express-handlebars');
var qt = require('quickthumb');

app.set('views', path.join(__dirname, 'templates'));
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main',layoutsDir: path.join(__dirname, 'templates/layouts')}));
app.set('view engine', '.hbs');
app.use(qt.static(path.join(__dirname, 'public')));

/* Files */
import {Logger} from "./lib/logger";
import {Visitors} from "./routes/visitors";
import {TemplateManager} from "./services/templateManager";

let logger = new Logger();
let templateManager = new TemplateManager();
let visitors = new Visitors( logger);

var server = require('http').createServer(app);

app.get('/', visitors.get());
app.get('/caseStudy/:id', visitors.caseStudy());

server.listen(config.server.port, () => {
    logger.info("System Listen on port " + config.server.port);
});

