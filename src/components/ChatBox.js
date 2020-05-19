import React from 'react';
import MessageForm from '../components/MessageForm'
import MessagesView from './MessagesView'

export default class ChatBox extends React.Component {
    intervalID;

    state = {
        messages: [],
    }

    componentDidMount() {
        this.fetchMessages()
    }

    componentWillUnmount() {
       clearTimeout(this.intervalID);
    }

    fetchMessages = () => {
        console.log(this.state.messages)
        fetch('http://localhost:3000/api/v1/messages')
        .then(resp => resp.json())
        .then((data) => {
            this.setState({messages: data});
            this.intervalID = setTimeout(this.fetchMessages.bind(this), 1000)
    })
    }

    render() {
        return (
            <div>
                {this.props.isSubmitted && <MessageForm messages={this.state.messages} localStorage={this.props.localStorage}/>}   
                <MessagesView messages={this.state.messages}/>
            </div>
        )
    }
}
