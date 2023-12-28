import * as knex from 'knex';

export interface IConnection {
    host: string;
    password: string;
    database: string;
    user: string;
    timezone: string;
}