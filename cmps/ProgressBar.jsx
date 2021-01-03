const { connect } = ReactRedux

class _ProgressBar extends React.Component {
    getPre = () => {
        const { todos } = this.props
        const doneTodos = todos.filter(todo => todo.isDone).length
        return Math.floor((doneTodos / todos.length) * 100)
        
    }
    render() {
        const precent = this.getPre()
        return (
            <div className='bar' >
                <div className="progress" style={{ width: `${precent}%` }}></div>
                <p className="p-text">{precent}%</p>
            </div>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

export const ProgressBar = connect(mapGlobalStateToProps)(_ProgressBar)