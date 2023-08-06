import { useNavigate } from "react-router-dom";
const { createContext, useContext, useState, useEffect } = require("react");

const ChatContext = createContext()

const ChatProvider = function({children}){

    const [user,setUser] = useState()
    const navigate = useNavigate()

    useEffect(function(){ //This happens when ever the ChatProvider is called

        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        
        if(!userInfo){
            navigate("/login")
        }
        setUser(userInfo)
        

    },[navigate])// Due to [navigate] this useEffect will only execute when navigate changes 

    return (
        <ChatContext.Provider value={{user,setUser}}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState = function(){
    return useContext(ChatContext)
}


export default ChatProvider