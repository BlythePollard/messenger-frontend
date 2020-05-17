import React from 'react'
import MessagesView from './MessagesView'

export default class MessageForm extends React.Component {
    state = {
        content: '',
        username: this.props.username,
        messages: this.props.messages
    }

    //adding new message to state on submit

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
            this.setState({ messages: [...this.state.messages, data]})
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
            <form onSubmit={this.handleSubmit}>
            <input 
                type="message"
                placeholder="new message"
                value={this.state.content.content}
                onChange={this.handleChange}
                   />
                <input type='submit' value='Send'/>
            </form>
            <MessagesView messages={this.state.messages}/>
        </div>
        )
    }

}
// <ChatBox message={this.state}/>
//<ChatBox newMessage={this.state.content}/>



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