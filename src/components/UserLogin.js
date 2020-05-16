import React from 'react';
import MessageForm from './MessageForm'

export default class UserLogin extends React.Component {
    state = {
        username: '',
        isSubmitted: false
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = event => {
        const username = this.state.username
        event.preventDefault();
        return fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body: JSON.stringify({username})
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            localStorage.setItem("token", data.id)
            this.setState({ username: data.username})
            this.setState({ isSubmitted: true })
        })
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input 
                        type="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                   />
                   <input type='submit' value='Login'/>
                </form> 
                {this.state.isSubmitted && <MessageForm />}           
            </div>
        )
    }
}