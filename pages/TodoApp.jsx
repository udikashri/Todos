import { todoService } from '../services/todoService.js';
import { TodoFilter } from '../cmps/TodoFilter.jsx';
import { AddTodo } from '../cmps/AddTodo.jsx'
import { TodoList } from '../cmps/TodoList.jsx'
const { connect } = ReactRedux

class _TodoApp extends React.Component {
    state = {
        filterBy: {
            select: 'all',
            name: '',
            minStars: '',
            maxStars: '' 
        }

    }

    onAdd = (ev, addedTodo,elInputVal) => {
        ev.preventDefault()
        const todo = todoService.createTodo(addedTodo)
        const action = {
            type: 'ADD',
            todo
        }
        this.props.dispatch(action)
        elInputVal.value = ''
    }

    removeTodo = (ev, id) => {
        ev.preventDefault()
        const action = {
            type: 'REMOVE_TODO',
            id
        }
        this.props.dispatch(action)
    }

    toggleTodo = (ev, todo) => {
        ev.preventDefault()
        const newTodo = todoService.toggleTodo(todo)
        const action = {
            type: 'UPDATE_TODO',
            newTodo
        }
        this.props.dispatch(action)
    }

    todosToShow = () => {
        const { todos } = this.props
        const { filterBy } = this.state
        return todoService.getTodos(todos, filterBy)
    }

    changeFilter = (chosenSelect, chosenName,chosenMinStars,chosenMaxStars) => {
        let filterBy;
        if (chosenSelect) {
            filterBy = {
                select: chosenSelect,
                name: this.state.filterBy.name,
                minStars: this.state.filterBy.minStars,
                maxStars: this.state.filterBy.maxStars
            }
            this.setState({ filterBy })
        } 

        if (chosenName || chosenName === '') {
            filterBy = {
                select: this.state.filterBy.select,
                name: chosenName,
                minStars: this.state.filterBy.minStars,
                maxStars: this.state.filterBy.maxStars
            }
            this.setState({ filterBy })
        }

        if (chosenMinStars || chosenMinStars === '') {            
            filterBy = {
                select: this.state.filterBy.select,
                name: this.state.filterBy.name,
                minStars: chosenMinStars,
                maxStars: this.state.filterBy.maxStars                
            }
            this.setState({ filterBy })
        }

        if (chosenMaxStars || chosenMaxStars === '') {
            filterBy = {
                select: this.state.filterBy.select,
                name: this.state.filterBy.name,
                minStars: this.state.filterBy.minStars,
                maxStars: chosenMaxStars               
            }
            this.setState({ filterBy })
        }
    }
    render() {
        const todos = this.todosToShow()
        const userBgc = this.props.user.fevBgc 
        const userTxtColor = this.props.user.fevTxtColor 
        return (
            <section style={{ backgroundColor: `${userBgc}`,color: `${userTxtColor}`,padding: 10+'px' }} className='app-body' >
                <h1 style = {{textAlign:'center',textShadow:'2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff'}}>Todos</h1>
                <h1 style = {{textAlign:'center', textShadow:'2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff'}}>hello {this.props.user.fullName}</h1>
                <TodoFilter changeFilter={this.changeFilter} />
                <AddTodo onAdd={this.onAdd} />
                <TodoList toggleTodo={this.toggleTodo} todos={todos} onMakeImportent={this.onMakeImportent} removeTodo={this.removeTodo} />
                <hr />
            </section>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        todos: state.todos,
        user : state.user
    }
}

export const TodoApp = connect(mapGlobalStateToProps)(_TodoApp)