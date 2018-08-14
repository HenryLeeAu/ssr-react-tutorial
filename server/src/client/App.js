import React from 'react';
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'

import  { fetchCurrentUser } from './actions'
const App = ({route}) => {
  return (
  <div>
    <h1>app</h1>
    <Header/>
    {renderRoutes(route.routes)}
  </div>);
}
function loadData(store){
  return store.dispatch(fetchCurrentUser())
}
export default{
  loadData,
  component:App,
  
}