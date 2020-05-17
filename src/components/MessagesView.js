import React from 'react'

const MessagesView = (props) => {
    console.log(props)
    console.log(props.user)
    const user = props.user
    
    return (
        <div>
            
            {props.messages.map(message =>
                <p key={message.id}>
                    {message.content}
                    </p>
                )} 
        </div>
    )
}

export default MessagesView