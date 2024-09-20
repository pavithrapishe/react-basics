import React from 'react'
import UserContext from '../utils/UserContext'

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userInfo: {
                login: 'Dummy',
                html_url: 'Default',
                avatar_url: 'dummy',
            },
        }
    }

    async componentDidMount() {
        console.log('Child componentDidMount')

        const data = await fetch('https://api.github.com/users/pavithrapishe')
        const json = await data.json() // because it returns a promise
        console.log('json', json)

        this.setState({
            userInfo: json,
        })
    }

    render() {
        const { login, html_url, avatar_url } = this.state.userInfo
        const { count } = this.state

        return (
            <div className="user-card">
                <h1> Count: {count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                >
                    Increment
                </button>
                <h2> Name: {login}</h2>
                <h3> Location: {html_url}</h3>

                <img src={avatar_url}></img>

                <div>
                    {' '}
                    logged in user :
                    <UserContext.Consumer>
                        {(data) => <h1>{data.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default UserClass
