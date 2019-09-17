import {
  ReactApp,
  fetch_todo
} from './get'
import {
  add_todo
} from './post'
import { delete_todo } from './delete'
function appRouteHandler(req, res) {
  ReactApp(req, res)
}
function initRoutes(app) {
  app.get('/fetch_todo', (req, res) => fetch_todo(req, res))
  app.get('*', appRouteHandler)
  //add note 
  app.post('/add_todo', (req, res) => add_todo(req, res))
  // DELETE TODO
  app.delete('/delete',(req,res)=>delete_todo(req,res))
  
}

export default initRoutes
