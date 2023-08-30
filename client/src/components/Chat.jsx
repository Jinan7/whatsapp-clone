import { useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosAttach } from "react-icons/io"
import {FiMoreVertical} from "react-icons/fi"
import { styled } from "styled-components"


const Chat = () => {
    const [seed, setSeed] = useState("")
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (<Wrapper>
        <div className="header">
            <img src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} alt="" className="avatar"/>
            <div className="info">
                <h2>room name</h2>
                <p>last seen at...</p>
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
            <p className="message">
                <span className="name">Lorem.</span>
                Lorem ipsum dolor sit amet.
                <span className="timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className="message receiver">
                <span className="name">Lorem.</span>
                Lorem ipsum dolor sit amet.
                <span className="timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            <p className="message ">
                <span className="name">Lorem.</span>
                Lorem ipsum dolor sit amet.
                <span className="timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
        </div>
        <div className="footer">

        </div>
    </Wrapper>)
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;

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
`


export default Chat