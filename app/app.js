//
// Libraries
//
import express from 'express'
import bodyParser from 'body-parser'
//
// Routes
//
import {
  indexRoute
} from './routes/index'
import {
  persianRoute
} from './routes/persian'

const app = express()
//
// BodyParser config
//
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json({
  limit: '5mb'
}))
//
// Public folder config
//
app.use(express.static('app/public'))
//
// Routes config
//
app.use(indexRoute)
app.use(persianRoute)
//
// Start server
//
app.listen(process.env.PER_CAL_PORT, () => {
  console.log('Persian Calendar API app started on port ' + process.env.PER_CAL_PORT)
})