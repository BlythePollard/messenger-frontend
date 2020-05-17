import React from 'react';
import MessageForm from './MessageForm'

export default class UserLogin extends React.Component {
    state = {
        username: '',
        isSubmitted: false,
        localStorage: ''
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
            if(data.username != undefined) {
                localStorage.setItem("token", data.id)
                this.setState({ username: data.username})
                this.setState({ isSubmitted: true })
                this.setState({localStorage: localStorage.token})
            } else {
                alert("please try again")
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.isSubmitted && <MessageForm username={this.state.username} localStorage={this.state.localStorage}/>}   
                <br></br>
               <form onSubmit={this.handleSubmit}>
                   <input 
                        type="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                   />
                   <input type='submit' value='Login'/>
                </form>         
            </div>
        )
    }
}