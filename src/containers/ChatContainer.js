//will render login component & chat board with all messages (index)
import React from 'react';
import UserLogin from '../components/UserLogin'
import MessagesView from '../components/MessagesView'

export default class ChatContainer extends React.Component {
    state = {
        messages: []
    }

    componentDidMount() {
        this.fetchMessages()
    }

    fetchMessages = () => {
        fetch('http://localhost:3000/api/v1/chatroom')
        .then(resp => resp.json())
        .then((data) => 
            this.setState({messages: data}))
    }

    render() {
        return (
            <div>
                <MessagesView messages={this.state.messages}/>
                <UserLogin />
            </div>
        )
    }
}
