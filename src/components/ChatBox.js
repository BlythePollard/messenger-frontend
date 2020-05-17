//will render login component & chat board with all messages (index)
import React from 'react';
import UserLogin from '../containers/UserLogin'
import MessagesView from './MessagesView'

export default class ChatBox extends React.Component {

    componentDidMount() {
        this.fetchMessages()
    }

    fetchMessages = () => {
        fetch('http://localhost:3000/api/v1/chatroom')
        .then(resp => resp.json())
        .then((data) => 
            this.setState({messages: this.props}))
    }

    render() {
        return (
            <div>
                <MessagesView messages={this.props.messages} user={this.props.user}/>
            </div>
        )
    }
}
