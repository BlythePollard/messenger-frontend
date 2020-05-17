import React from 'react'

const MessagesView = (props) => {
    
    return (
        <div>
            {props.messages.map(message =>
                <p key={message.id}>
                    {message.user.username}:   
                    {message.content}
                    </p>
                )} 
        </div>
    )
}

export default MessagesView