import {TodoPreview} from 'TodoPreview.jsx'
export  class TodoList extends React.Component {
    render() {
        return (
            <ul>
                    {this.props.todos.map(todo => <TodoPreview toggleTodo={this.props.toggleTodo} key={todo._id} todo={todo} onMakeImportent={this.props.onMakeImportent}
                    removeTodo={this.props.removeTodo}/> )}
                </ul>
        )
    }
}