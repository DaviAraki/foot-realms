import { Server, FlatFile } from 'boardgame.io/Server'
import { FootRealms } from './Game'

const server = Server({
  games: [FootRealms],

  db: new DbConnector(),

});
server.run(8000, () => console.log("server running..."));