const config ={
    user: '<username>',
    password: '*****',
    server: 'localhost',
    database: 'StackOverflow2010',
    connectionTimeout: 300000,
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    },
    options:{
        trustedconnection: true,
        enableArithAort: true
     //   instancename: 'SQLEXPRESS'
    },
    port: 1433

}

module.exports = config;