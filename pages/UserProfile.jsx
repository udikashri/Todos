const { connect } = ReactRedux
const { Link } = ReactRouterDOM

class _UserProfile extends React.Component {
    editUser = (ev) => {
        if (ev.target.type === 'text') {
            const action = {
                type: 'EDIT_USER_NAME',
                fullName: ev.target.value
            }
            this.props.dispatch(action)
        }
        if (ev.target.type === 'color') {
            if (ev.target.name === 'bgc') {
                const action = {
                    type: 'EDIT_USER_BGC',
                    fevBgc: ev.target.value
                }
                this.props.dispatch(action)
            }
            if (ev.target.name === 'text-color') {
                const action = {
                    type: 'EDIT_USER_TXT_COLOR',
                    fevTxtColor: ev.target.value
                }
                this.props.dispatch(action)
            }
        }

    }
    render() {
        return (
            <section>
                <label>
                    <input name="full-name" type="text" value={this.props.users.fullName} placeholder="Please enter fullname" onChange={(event) => { this.editUser(event) }} />
                </label>
                <label>
                    Pick background color -
                    <input name="bgc" type="color" value={this.props.users.fevBgc} onChange={(event) => { this.editUser(event) }} />
                </label>
                <label>
                    Pick text color -
                    <input name="text-color" value={this.props.users.fevTxtColor} type="color" onChange={(event) => { this.editUser(event) }} />
                </label>
                <Link to='/todo-app'>Login</Link>
            </section>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        users: state.user
    }
}

export const UserProfile = connect(mapGlobalStateToProps)(_UserProfile)