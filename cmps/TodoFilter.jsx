export class TodoFilter extends React.Component {
    render() {
        return (
            <section >
                <input type="text" placeholder="Search by name" onChange={(ev) => this.props.changeFilter(null, ev.target.value,null,null)} />
                <input name="min-stars" type="number" placeholder="Min Stars" onChange={(ev) => this.props.changeFilter(null,null,ev.target.value,null)} />
                <input name="max-stars" type="number" placeholder="Max Stars" onChange={(ev) => this.props.changeFilter(null,null,null,ev.target.value)} />
                <select onChange={(ev) => this.props.changeFilter(ev.target.value, null,null,null)}>
                    <option value="all" >all</option>
                    <option value="active" >active</option>
                    <option value="done" >done</option>
                </select>
            </section>
        )
    }
}