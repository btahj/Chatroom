import React from 'react';
import MyContainer from './MyContainer';



const Chatroom = () => {
    return (
        <div className="chatroom">
            <div className="chatroom-container">
                <h1 id="chat-header">Chatroom Page</h1>
                <div className="post-container">
                    <MyContainer />
                </div>
            </div>
        </div>
    );
}

export default Chatroom;