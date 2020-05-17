import React from 'react'
import ChatBox from './ChatBox'


export default class MessageForm extends React.Component {
    state = {
        content: '',
        username: this.props.username,
        messages: []
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.props.localStorage
        const data = this.state
        return fetch(`http://localhost:3000/api/v1/users/${user}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({ messages: data})
        })
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    
    render() {
        return(
            <div>
            <ChatBox messages={this.state.messages}/>
            <form onSubmit={this.handleSubmit}>
            <input 
                type="message"
                placeholder="new message"
                value={this.state.content}
                onChange={this.handleChange}
                   />
                <input type='submit' value='Send'/>
            </form>
        </div>
        )
    }

}



//const MessageForm = (props) => {
    //     return (
    //         <div>
    //             <form onSubmit={this.handleSubmit}>
    //             <input 
    //                 type="message"
    //                 placeholder="new message"
    //                 value={this.state.username}
    //                 onChange={this.handleChange}
    //                    />
    //                 <input type='submit' value='Login'/>
    //             </form>
    //         </div>
    //     )
    // }
    
    // export default MessageForm;