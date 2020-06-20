import { Server, FlatFile } from 'boardgame.io/server'
import { FootRealms } from './Game'

const server = Server({
  games: [FootRealms],

  db: new FlatFile({
    dir:'./database',
    logging:(true)
  })
})
server.run(8000)