const jsonServer = require('json-server')

const empMServer = jsonServer.create()
const middlieware = jsonServer.defaults()
const data = require('./db.json')

const PORT = 3000 || process.env.PORT

empMServer.use(middlieware)
empMServer.use(jsonServer.router(data))

empMServer.listen(PORT, () => {
    console.log(`json server started ${PORT}`)
})
