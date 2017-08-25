'use strict';

// Development specific configuration
// ==================================
process.env.DEBUG= 'dev';

module.exports = {
    db: {
        mongo: {
            uri:'mongodb://localhost/work'
        },
        mysql: {
            host     : '172.16.45.254',
            user     : 'root',
            password : 'cooxm',
            database : 'mysql',
            connectionLimit:10
        },
        redis: {
            port: 6379,
            //host: '127.0.0.1',
            host:'172.16.45.254',
            db: 3,
            options: {
                return_buffers: false,
                //auth_pass: 'GuangtianTuringCatGood'
            }
        }
    },
    appPath:"src"
};
