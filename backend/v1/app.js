const express = require('express')
const helmet = require('helmet')
const nodemailer = require('nodemailer')
const { ApolloServer } = require('apollo-server-express')

const GraphQLSchema = require('./graphql')

const server = new ApolloServer(GraphQLSchema)
const app = express()

app.use(helmet())
app.use(express.static('public'))

server.applyMiddleware({ app })

app.mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

app.listen(process.env.PORT || 8081)
