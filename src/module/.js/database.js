import mysql from 'mysql'

/* CONFIG DB */
export const host = "localhost"
export const username = "elearning"
export const password = "elearning"
export const database = "elearning"

export default function CONFIG_DB() {
    let connection = mysql.createConnection({
        host: host,
        user: username,
        password: password,
        database: database,
        multipleStatements: true
    });

    return connection
}