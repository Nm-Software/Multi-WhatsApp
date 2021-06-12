"use strict";
console.clear();

if (!process.env.MODE) {
    console.warn('Starting in development mode');
    require('dotenv').config();
} else {
    console.warn('Starting in production mode.')
}

const Routes = require('./Routes')
const Cors = require('cors');
const Express = require('express');
const App = Express();
const cookieParser = require('cookie-parser');
const Server = require('http').createServer(App);
const io = require('socket.io')(Server);
const baseDir = require('path').resolve(__dirname, 'Views', 'build');
const Port = process.env.PORT || 3000;

//Middlewars
App.use(Express.json({ limit: '64mb' }));
App.use(Express.urlencoded({ extended: false, limit: '64mb' }))
App.use(Cors({
    origin: '*',
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization, Token",
    methods: 'POST, GET, PUT, PATCH, DELETE'
}));
App.use(cookieParser())
//Rotas
App.use('/api', Routes.Api)
App.use('/webhooks', Routes.WebHooks)

//Site
App.use(Express.static(`${baseDir}`));
App.get('/*', (req, res) => res.sendFile('index.html', { root: baseDir }));

//Listeners
App.use(Routes.Listeners.NotFound)
App.use(Routes.Listeners.Error)

Server.listen(Port, () => {
    console.log(`Listening at localhost:${Port}`);
})

io.on('connection', (socket) => {
    console.log(`New client connected. ID:${socket.id}`);
});

exports.emit = function (event, data) {
    return io.emit(event, data);
}