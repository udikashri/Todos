export class AddTodo extends React.Component {

    state ={
        todo:'',
        val:''
    }
    
    handleChange = (ev) => {
        this.setState({ todo: ev.target.value })
        this.setState({ val: ev.target })
    }

    render() {
        return (
            <form>
                <input className="add-input" type="text" placeholder="Add Todo" onChange={this.handleChange} />
                <button className="add-button" onClick={(event) => { this.props.onAdd( event , this.state.todo, this.state.val) }}>Add</button>
            </form>
        )
    }
}