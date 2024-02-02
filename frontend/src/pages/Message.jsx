import React, { useState } from "react";
import profile_pic from "../assets/Overview/Profil.png";
const profile1 = "https://i.pravatar.cc/150?img=64";
const profile2 = "https://i.pravatar.cc/150?img=59";
const profile3 = "https://i.pravatar.cc/150?img=51";
const profile4 = "https://i.pravatar.cc/150?img=7";

const chatsData = [
  {
    id: 1,
    name: "Jaachimike Okafor",
    profile_pic: profile2,
    lastMessage: "That's great!",
    messages: [
      {
        id: 1,
        sender: "Jaachimike Okafor",
        content: "Hey, how are you?",
        timestamp: 1672546400,
      },
      {
        id: 2,
        sender: "User",
        content: "Hi Jaachi, I'm doing well!",
        timestamp: 1672546460,
      },
      {
        id: 3,
        sender: "Jaachimike Okafor",
        content: "That's great!",
        timestamp: 1672546460,
      },
      // ... more messages
    ],
  },
  {
    id: 2,
    name: "Morenike",
    profile_pic: profile1,
    lastMessage: "Wonderful!",
    messages: [
      {
        id: 1,
        sender: "Morenike",
        content: "Hey, how are you?",
        timestamp: 1672546400,
      },
      {
        id: 2,
        sender: "User",
        content: "Hi Morenike, I'm doing well!",
        timestamp: 1672546460,
      },
      {
        id: 3,
        sender: "Morenike",
        content: "Wonderful!",
        timestamp: 1672546400,
      },
      // ... more messages
    ],
  },
  {
    id: 3,
    name: "JDK",
    profile_pic: profile3,
    lastMessage: "Cool Cool",
    messages: [
      {
        id: 1,
        sender: "JDK",
        content: "Hey, how is it going??",
        timestamp: 1672546400,
      },
      {
        id: 2,
        sender: "User",
        content: "Hi JDK, I'm doing well!",
        timestamp: 1672546460,
      },
      {
        id: 3,
        sender: "JDK",
        content: "Cool Cool",
        timestamp: 1672546460,
      },
      // ... more messages
    ],
  },
  {
    id: 4,
    name: "ElCommandante",
    profile_pic: profile4,
    lastMessage: "You?",
    messages: [
      {
        id: 1,
        sender: "ElCommandante",
        content: "Hey, how are you?",
        timestamp: 1672546400,
      },
      {
        id: 2,
        sender: "User",
        content: "ElCommandante, I'm doing well!",
        timestamp: 1672546460,
      },
      {
        id: 3,
        sender: "User",
        content: "You?",
        timestamp: 1672546400,
      },
      // ... more messages
    ],
  },
];

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState(""); // State for input message

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-200 p-4">
        <h4 className="text-lg font-bold mb-4">Chats</h4>
        <ul className="space-y-0">
          {chatsData.map((chat) => (
            <li
              key={chat.id}
              className="cursor-pointer"
              onClick={() => handleChatClick(chat)}
            >
              <div className="flex items-center border-b-2 border-gray-300 py-4">
                <img
                  src={chat.profile_pic} // Or use your avatar source
                  alt={chat.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium">{chat.name}</p>
                  <p className="text-xs text-gray-500">{chat.lastMessage}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 bg-white p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold">
            {selectedChat ? selectedChat.name : "Select a chat"}
          </h4>
          {/* Add any additional actions for the chat header */}
        </div>

        {selectedChat && (
          <div>
            <div className="chat-messages-container mb-9">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 ${
                    message.sender === "User" ? "text-right " : ""
                  }`}
                >
                  <p className="text-sm font-medium mb-2">{message.sender}</p>
                  <p
                    className={` py-1 px-3 rounded-lg ${
                      message.sender === "User"
                        ? " text-white bg-[#546FFF]"
                        : ""
                    } inline`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="chat-input-container flex">
              {/* Input field for sending messages (will be implemented later)  */}
              <textarea
                className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
