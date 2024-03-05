// main ===================================================== //
type Query = string;
type Values = Array<any>;
interface ArgumentsQuery {
    query: Query,
    values?: Values
}
type ExecuteQuery = (args: ArgumentsQuery) => Promise<unknow>;

// export =================================================== //
export type { ExecuteQuery };