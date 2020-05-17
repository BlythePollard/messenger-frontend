import React from 'react'

export default class MessageForm extends React.Component {
    state = {
        message: '',
    }

    handleSubmit = () => {
        const user = this.props.localStorage
        const message = this.state.message
        console.log(message)
        return fetch(`http://localhost:3000/api/v1/users/${user}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(resp => resp.json())
        .then(newMessage => {
            console.log(newMessage)
        })
        //post new message to all messages
    }

    handleChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    
    render() {
        console.log(this.props)
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <input 
                type="message"
                placeholder="new message"
                value={this.state.message}
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