var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL
  , client
  , query;

client = new pg.Client(connectionString);
client.connect();
query = client.query('CREATE TABLE todo (id serial primary key, task varchar(255), completed varchar(3))');
query.on('end', function(result) { client.end(); });
