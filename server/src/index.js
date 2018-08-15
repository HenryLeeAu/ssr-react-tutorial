import 'babel-polyfill'
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  }
))
//assign where the public files located
app.use(express.static('public'));

app.get('*', (req,res)=>{
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
  .map(({route})=>{
     return route.loadData ? route.loadData(store) : null
  })
  .map(promise =>{
    if(promise){
      return new Promise((resolve,reject)=>{
        //the warp the loadData promise with New promise which always resolve in preventing from loading hang
        promise.then(resolve).catch(resolve);

      })
    }
  })
  Promise.all(promises).then(()=>{
    const context = {};
    const content = renderer(req,store,context);
    //use context obj to check if page not found after rendering ( via staticContext in component)
    
    
    //for server redirect
   if(context.url){
      return res.redirect(303,context.url)
      
    }
    if(context.notFound){
      res.status(404);
    }
    res.send(content)
   // res.send(renderer(req,store,context))
  })
  // some logic to initialize and load data into store

})


app.listen(3000, () => {
  console.log('Listening on port 3000')
})