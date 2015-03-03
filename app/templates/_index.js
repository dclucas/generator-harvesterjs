var harvesterApp = require('./app/api');

harvesterApp.listen(process.env.PORT, onListen);

function onListen() {
    console.log('listening on port ' + process.env.PORT);
}