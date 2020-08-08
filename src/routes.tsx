import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import GetApp from './pages/GetApp'

function Routes() {
    return (
        <HashRouter basename='/'>
            <Route path='/' exact component={Landing}/>
            <Route path='/study' component={TeacherList}/>
            <Route path='/give-classes' component={TeacherForm}/>
            <Route path='/get-app' component={GetApp}/>
        </HashRouter>
    )
}


export default Routes;
