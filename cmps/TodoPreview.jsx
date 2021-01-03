import { TodoCharAt } from 'TodoCharAt.jsx'
import { EditTodo } from '.pages/EditTodo.jsx'
const { Link } = ReactRouterDOM

export class TodoPreview extends React.Component {
    render() {
        let star = '⭐'
        const { todo } = this.props
        const isDone = todo.isDone ? 'done' : ''
        let todoStars = todo.stars
        return (
            <li>
                    <TodoCharAt todo={todo} />  
                <section style={{cursor:'pointer'}} className={isDone} key={todo._id} onClick={(event) => this.props.toggleTodo(event, todo)}>
                {todo.name} - {star.repeat(todoStars)}
                </section>
                <section>
                    <button onClick={(event) => <EditTodo props={this.props} id={todo._id} ev={event}/>}><Link to={`/edit-todo/id=${todo._id}`} id={3}>Edit</Link></button>
                    <button onClick={(event) => this.props.removeTodo(event, todo._id)}>X</button>
                </section>
            </li>
        )
    }
}