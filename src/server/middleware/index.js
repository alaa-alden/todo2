import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import connect from '../data/connect'
const initMiddleware = (app) => {
// for read data from page
// parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
  app.use(bodyParser.json())
// end config read
  app.use('', express.static(path.join(__dirname, '../../../bower_components')))
  app.use('/client', express.static(path.join(__dirname, '../../../build/client')))

  //connect with database
  try{connect()}
  catch(e){console.log(e)}
}
export default initMiddleware
