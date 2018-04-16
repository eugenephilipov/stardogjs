const querySubclasess = 'select * where {?z rdfs:subClassOf :People}';
const connectionString = {
    endpoint: 'http://localhost:5820',
    password: 'admin',
    username: 'admin',
};
const dbName = 'adb';
export { querySubclasess, connectionString, dbName };
