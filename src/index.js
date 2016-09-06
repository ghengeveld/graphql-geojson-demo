import express from 'express'
import graphql from 'express-graphql'
import schema from './schema'

const app = express()
const server = app.listen(8000, () => {
  console.log(`Listening at port ${server.address().port}...`) // eslint-disable-line no-console
})

app.use('/graphql', graphql({
  schema,
  graphiql: true,
}))

app.use((req, res) => {
  res.send('Hi there. This is a GraphQL server. Send your requests to /graphql')
})
