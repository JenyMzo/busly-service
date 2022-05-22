const Hapi = require('@hapi/hapi');
const port = process.env.PORT || 3000;
const Routes = require('./routes/routes.js');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const HapiMysql = require('hapi-plugin-mysql');
const Pack = require('./package');
const config = require('./config/config');

const swaggerOptions = {
    info: {
        title: 'Busly service',
        version: Pack.version
    }
};

exports.init = async () => {
    const server = Hapi.server({
        host: process.env.MYSQL_DB_HOST,
        port
    });

    Routes(server);

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        },
        {
            plugin: HapiMysql,
            options: {
                host: config.development.host,
                port: 3306,
                user: config.development.user,
                password: config.development.password,
                database: config.development.database,
                multipleStatements: true,
            }
        },
    ]);

    await server.start();

    console.log('Server running on %s', server.info.uri);

    return server;
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
