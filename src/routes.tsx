import React from 'react'
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes() {
    return (
        <HashRouter basename='/'>
            <Route path='/' exact component={Landing}/>
            <Route path='/study' component={TeacherList}/>
            <Route path='/give-classes' component={TeacherForm}/>
        </HashRouter>
    )
}


export default Routes;
