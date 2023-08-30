import { useContext, useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosAttach } from "react-icons/io"
import {FiMoreVertical} from "react-icons/fi"
import { styled } from "styled-components"
import {MdInsertEmoticon} from "react-icons/md"
import {BsFillMicFill} from "react-icons/bs"
import fetchUtil from "../../util"
import { StateContext } from "../StateProvider"


const Chat = (props) => {
    const {messages} = props
    const [seed, setSeed] = useState("")
    const [chat, setChat] = useState('')
    const [state, reducer] = useContext(StateContext)
    const {user} = state

    const UpdateChat = (e) => {
        e.preventDefault()
        setChat((chat)=>{
            return e.target.value
        })
    }

    const sendMessage = async (e)=>{
        e.preventDefault()
        await fetchUtil.post('/messages/new', {
            message:chat,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received:true,
        })

        console.log(user.displayName)
        setChat((chat)=>{
            return ""
        })
    }
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (<Wrapper>
        <div className="header">
            <img src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} alt="" className="avatar"/>
            <div className="info">
                <h2>ChatRoom</h2>
                <p>{messages[messages.length -1]?.timestamp}</p>
            </div>
            <div className="rheader">
                <button className="btn">
                    <AiOutlineSearch className="search-icon icon"/>
                </button>
                <button className="btn">
                    <IoIosAttach className="icon"/>
                </button>
                <button className="btn">
                    <FiMoreVertical className="icon"/>
                </button>
            </div>
        </div>
        <div className="body">
            
            {
                messages.map((_message)=>{
                    const {_id:id, message, name, timestamp, received} = _message
                    return (<p key={id} className={name===user.displayName?`message receiver`:`message`}>
                    <span className="name">{name}</span>
                    {message }
                    <span className="timestamp">
                        {/* {new Date().toUTCString()} */}
                        {timestamp}
                    </span>
                </p>)
                })
            }
        </div>
        <div className="footer">
            <MdInsertEmoticon className="icon"/>
            <form method="post">
                <input type="text" placeholder="Type a message" value={chat} onChange={UpdateChat}/>
                <button type="submit" onClick={sendMessage}>send a message</button>
            </form>
            <BsFillMicFill className="icon"/>
        </div>
    </Wrapper>)
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding:1rem;
    height:90vh;
    .header{
        display:grid;
        grid-template-columns: auto 1fr auto;
        padding: 1rem;
        align-items:center;
        border-bottom: 1px solid lightgray;
        gap: 0.5rem;
        background: white;
    }

    .avatar{
        width:3rem;
        height:3rem;
        object-fit:cover;
    }

    .icon{
    font-size:1.5rem;
    color:gray;
   }
   
   .btn{
    border: none;
    background: transparent;
   }

   .info h2{
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .body{
        padding:1rem;
        overflow:scroll;
    }

    .message{
        position:relative;
        background:red;
        width:fit-content;
        border-radius:1rem;
        background: white;
        margin-bottom: 1.5rem;
        font-size: 1rem;
        padding:0.5rem;
    }

    .receiver{
        margin-left:auto;
        background: #dcf8c6;
    }

    .timestamp{
        font-size: xx-small;
    }

    .name{
        position:absolute;
        top: -1rem;
        font-weight: 800;
        font-size: small;
    }

    .footer{
        display:grid;
        grid-template-columns: auto 1fr auto;
        gap:1rem;
        align-items:center;
    }

    .footer form{
        display:grid;
        grid-template-columns: 1fr auto;

    }

    .footer form input{
        outline-width: 0;
        border:none;
        padding:1rem;
        border-radius: 2rem;
    }

    .footer form button{
        display: none;
    }
`


export default Chat