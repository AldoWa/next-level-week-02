import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LandingPage from './pages/Landing'
import TeachForm from './pages/TeacherForm'
import TeachList from './pages/TeacherList'
export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  path="/give-classes" component={TeachForm}/>
        <Route  path="/study" component={TeachList}/>
      </Switch>
    </BrowserRouter>
  )
}