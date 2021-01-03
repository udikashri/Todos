const { connect } = ReactRedux
const { Link } = ReactRouterDOM
import { storageService } from '../services/storageService.js'
class _EditTodo extends React.Component {

    state = {
        todos: {
            nameTodo: '',
            stars: ''
        }
    }

    componentDidMount() {
        var strUrl = window.location.href
        var searchParams = new URLSearchParams(strUrl)
        for (let p of searchParams) {
            const id = p[1]
            storageService.loadFromStorage('currTodoId')
            this.props.todos.map((todo) => {
                if (id === todo._id) {
                    let { todos } = this.state
                    todos.nameTodo = todo.name
                    todos.stars = todo.stars
                    this.setState({ todos })
                }
            })
        }
    }

    updateState = () => {
        var strUrl = window.location.href
        var searchParams = new URLSearchParams(strUrl)
        for (let p of searchParams) {
            const id = p[1]
            storageService.saveToStorage('currTodoId', id)
        }
        const id = storageService.loadFromStorage('currTodoId')
        this.props.todos.map((todo) => {
            if (id === todo._id) {
                let { todos } = this.state
                todos.nameTodo = todo.name
                todos.stars = todo.stars
                this.setState({ todos })
            }
        })
    }
    editTodo = (ev) => {
        if (ev.target.type === 'text') {
            const action = {
                type: 'EDIT_TODO_NAME',
                newTodo: ev.target.value
            }
            this.props.dispatch(action)
            this.updateState()
        } else {
            const action = {
                type: 'EDIT_TODO_STAR',
                todoStars: ev.target.value
            }
            this.props.dispatch(action)
            this.updateState()
        }
    }
    render() {
        return (
            <section>
                <label>
                    Edit name -
                <input name="todo-name" type="text" value={this.state.todos.nameTodo} placeholder="Enter todo name" onChange={(event) => { this.editTodo(event) }} />
                </label>
                <label>
                    Edit Stars -
                <input name="todo-stars" type="number" value={this.state.todos.stars} placeholder="1><5" min="1" max="5" onChange={(event) => { this.editTodo(event) }} />
                </label>
                <Link to='/todo-app'>Save</Link>
            </section>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export const EditTodo = connect(mapGlobalStateToProps)(_EditTodo)