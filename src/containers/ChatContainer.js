//will render login component & chat board with all messages (index)
import React from 'react';
import UserLogin from '../components/UserLogin'

export default class ChatContainer extends React.Component {
    render() {
        return (
            <div>
                this chat container will show all messages
                <UserLogin />
            </div>
        )
    }
}