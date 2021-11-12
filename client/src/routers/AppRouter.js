import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import RegisterPage from '../pages/RegisterPage'

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPageinPage} />
                <Route exact path="/register" component={RegisterPageterPage} />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="/projects" component={ProjectsPageage} />
                <Route exact path="/project/:projectId" component={ProjectPagePage} />
                <Route exact path="/admin/users" component={UsersPagePage} />

                <Route path="*" component={NotFoundPageage} />

            </Switch>
            <h1>AppRouter</h1>
            
        </Router>
    )
}