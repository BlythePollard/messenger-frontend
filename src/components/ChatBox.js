//will render login component & chat board with all messages (index)
import React from 'react';
import UserLogin from '../containers/UserLogin'
import MessagesView from './MessagesView'
import MessageForm from '../components/MessageForm'


export default class ChatBox extends React.Component {
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
            this.setState({messages: data})) //fetch all messages & set to state
    }

    render() {
        return (
            <div>
                {this.props.isSubmitted && <MessageForm messages={this.state.messages} username={this.props.username} localStorage={this.props.localStorage}/>}   
            </div>
        )
    }
}


