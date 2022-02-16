const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'test123.clfslonrjvfx.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: '12345678',
    database: 'test123'
});

module.exports = {
    pool: pool
};