import { IConfig } from "./interfaces/IConfig";



const config: IConfig = {
    connection1: {
        host: '172.17.0.2',
        user: 'root',
        database: 'db1',
        password: 'root',
        timezone: '-03:00'
    },
    connection2: {
        host: '172.17.0.2',
        user: 'root',
        database: 'db1',
        password: 'root',
        timezone: '-03:00'
    },
    compare: {},
    output: 'delta.sql'
}


