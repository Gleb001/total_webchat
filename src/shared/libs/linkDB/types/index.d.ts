// main ===================================================== //
type Query = string;
type Values = Array<any>;
type ExecuteQuery = ({ query: Query, values: Values }) => Promise<unknow>;

// export =================================================== //
export type { ExecuteQuery };