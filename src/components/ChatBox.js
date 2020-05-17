import React from 'react';
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
            this.setState({messages: data}))
    }

    render() {
        return (
            <div>
                {this.props.isSubmitted && <MessageForm messages={this.state.messages} localStorage={this.props.localStorage}/>}   
            </div>
        )
    }
}


