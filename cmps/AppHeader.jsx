import {ProgressBar} from 'ProgressBar.jsx'
const { Link } = ReactRouterDOM

export function AppHeader() {
    return (
        <header>
            <nav>
                <h1 className="main-title">My Todo</h1>
                <Link className="link home-link" to="/">Home </Link>
                <Link className="link" to="/todo-app">Todo List </Link>
                <Link className="link" to="/user-profile"> User Profile</Link>
                <ProgressBar/>
            </nav>
        </header>
    )
}