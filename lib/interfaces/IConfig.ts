import { ICompare } from "./ICompare";
import { IConnection } from "./IConnection";
export interface IConfig {
    connection1: IConnection;
    connection2: IConnection;
    compare: ICompare;
    output: string;
}