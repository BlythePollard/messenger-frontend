import React from 'react'

const MessagesView = (props) => {
    console.log(props.messages)
    
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


//access username from localstorage