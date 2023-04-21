import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { FaPlus, FaCog } from 'react-icons/fa';
import { ImFilePicture } from 'react-icons/im';
import { Gi3DGlasses } from "react-icons/gi";
import './dashboard.css';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { AiOutlineFileImage } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const ChatScreenContainer = styled.div`
  height: 79vh;
  width: 180vh;
  display: flex;
  flex-direction: column;
  background-color: #434448;
  padding: 20px;
  
  
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ChatTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  color: #36393f;
`;

const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-family:cursive;
  margin-bottom: 16px;
  align-items: ${props => props.isCurrentUser ? "flex-end" : "flex-start"};
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7289da;
  margin-right: 16px;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #36393f;
  background-color: ${props => props.isCurrentUser ? "#4da3a4" : "#fff"};
  border-radius: 4px;
  padding: 10px;
  align-self: ${props => props.isCurrentUser ? "flex-end" : "flex-start"};
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const AuthorName = styled.span`
  color: ${props => props.isCurrentUser ? "#fff" : "#000"};
  font-size: 12.6px;
  font-weight: 550;
  margin-right: 8px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

`;

const MessageTime = styled.span`
  color: ${props => props.isCurrentUser ? "#fff" : "#8e9297"};
  font-size: 12px;
`;

const MessageText = styled.p`
  color: ${props => props.isCurrentUser ? "#fff" : "#000"};
  font-size: 14px;
  margin: 0;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #36393f;
`;

const ChatInput = styled.input`
  flex: 1;
  border: none;
  background-color: #40444b;
  color: #36393f;
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  margin-right: 16px;

  &:focus {
    outline: none;
  }
`;

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const SendButton = styled.button`
  border: none;
  background-color: #7289da;
  color: #fff;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

const EmojiPickerButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  bottom: 70px;
  right: 20px;
`;






const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [emoji, setEmoji] = useState(null);
    const [emojiPickerSelected, setEmojiPickerSelected] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const chatMessagesRef = useRef(null);

        const [selectedImage, setSelectedImage] = useState(null);
      
        const handleMessageSubmit = (message) => {
          const newMessage = {
            text: message,
            image: selectedImage,
          };
          setMessages([...messages, newMessage]);
          setSelectedImage(null);
        };
      
        const handleImageChange = (event) => {
          const file = event.target.files[0];
          const reader = new FileReader();
      
          reader.onloadend = () => {
            setSelectedImage(reader.result);
          };
      
          if (file) {
            reader.readAsDataURL(file);
          }
        };
      



    useEffect(() => {
        // Simulate messages coming from server
        const newMessages = [
          { id: 1, author: 'John', text: 'Hello there!', time: new Date() },
          { id: 2, author: 'Jane', text: 'Hey John, how are you?', time: new Date() },
          { id: 3, author: 'John', text: 'I\'m doing great, thanks for asking!', time: new Date() },
          
        ];
        setMessages(newMessages);
      }, []);

      const handleSendMessage = (e) => {
        e.preventDefault();
        if (!messageInput.trim() && !selectedImage) {
        return;
        }
        handleMessageSubmit(messageInput);
        setMessageInput('');
        setShowEmojiPicker(false);
        };
    
      useEffect(() => {
    // Scroll to bottom of messages when new message is added
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [messages]);
    
  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendButtonClick = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        author: 'You',
        text: messageInput,
        time: new Date(),
        emoji: showEmojiPicker ? emojiPickerSelected.native : null, // Add emoji property to message object
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
      setShowEmojiPicker(false); // Hide the emoji picker after sending the message
    }
  };
  

  const handleEmojiClick = (emoji) => {
  setEmojiPickerSelected(emoji);
  setMessageInput(`${messageInput}${emoji.native}`);
};

  
  



  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendButtonClick();
    }
  };
    
    
  // Define an array of communities
  const communities = [
    {
      id: 1,
      name: 'COMMUNITY 1',
      icon: 'https://picsum.photos/id/64/4326/2884',
      color: 'red',
    },
    {
      id: 2,
      name: 'COMMUNITY 2',
      icon: 'https://picsum.photos/id/289/2800/1508',
      color: 'yellow',

    },
    {
      id: 3,
      name: 'COMMUNITY 3',
      icon: 'https://picsum.photos/id/16/2500/1667',
      color: 'green',

    },

    {
        id: 4,
        name: 'COMMUNITY 4',
        icon: 'https://picsum.photos/id/64/4326/2884',
        color: 'red',
      },
      {
        id: 5,
        name: 'COMMUNITY 5',
        icon: 'https://picsum.photos/id/289/2800/1508',
        color: 'yellow',
  
      },
      {
        id: 6,
        name: 'COMMUNITY 6',
        icon: 'https://picsum.photos/id/16/2500/1667',
        color: 'green',
  
      },
  ];

  return (
    <div className="dashboard-container">
      <div className="left-menu">
        <div className="create-community">
          <FaPlus className="icon" />
          <NavLink to = "/createcommunityminipage" className="signup-image-link3">CREATE COMMUNITY </NavLink>
        </div>
        <div className="community-list">
          {communities.map((community) => (
            <div key={community.id} className="community-item">
              <img src={community.icon} alt={community.name} />
              <span>{community.name}</span>
            </div>
          ))}
        </div>
        <form className="user-form">
        <div className="username-settings">
        <Gi3DGlasses style={{ color: 'white', fontSize: '24px', backgroundColor: 'b71c83' }}/>
          <div style={{ color: 'b71c83' }} className="username">Username</div>
          <NavLink to = "/settings">
            <FaCog style={{ color: 'white'}} className="icon" />
          </NavLink>
        </div>
        </form>
      </div>
      

      <ChatScreenContainer>
       
      <ChatMessages>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            isCurrentUser={message.author === 'You'}
          >
            <MessageContent isCurrentUser={message.author === 'You'}>
              <MessageHeader>
                <AuthorName isCurrentUser={message.author === 'You'}>
                  {message.author}
                </AuthorName>
                <MessageTime>
                  {message.time.toLocaleTimeString()}
                </MessageTime>
              </MessageHeader>
              {message.image && (
                <img
                  src={message.image}
                  alt="message"
                  style={{ maxWidth: '100%' }}
                />
              )}
              <MessageText>{message.text}</MessageText>
            </MessageContent>
          </ChatMessage>
        ))}
        <div ref={chatMessagesRef}></div>
      </ChatMessages>
      <ChatInputContainer>
        <ChatInput
          type="text"
          placeholder="Type your message here..."
          value={messageInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <label htmlFor="file-upload">
          <ImFilePicture style={{ color: 'white', fontSize: '24px' }} />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <EmojiPickerButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
            😃
          </EmojiPickerButton>
          <SendButton style={{ backgroundColor: '#4da3a4', color: 'white' }} onClick={handleSendButtonClick}>
          <FaPaperPlane />
            </SendButton>
        {showEmojiPicker && (
          <EmojiPickerContainer>
            <Picker onSelect={handleEmojiClick} />
          </EmojiPickerContainer>
        )}
      </ChatInputContainer>
    </ChatScreenContainer>
    </div>





);
};

export default Dashboard;