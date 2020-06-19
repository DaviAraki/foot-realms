const {Server, FlatFile } = require('boardgame.io/server')
const {FootRealms} =  require('./App')

const server = Server({
  games: [FootRealms],

  db: new FlatFile({
    dir:'./public/logs',
    logging:(true)
  })
})
server.run(8000)