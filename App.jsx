const Router = ReactRouterDOM.HashRouter
const { Switch, Route } = ReactRouterDOM
const history = History.createBrowserHistory()
const { Provider } = ReactRedux;

import {store} from "store/store.js";
import {routes} from 'routes.js'
import {AppHeader} from 'cmps/AppHeader.jsx'

class App extends React.Component {
    render() {
        return (
            <main>
                <AppHeader />
                <Switch>
                    {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
                </Switch>
            </main>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)