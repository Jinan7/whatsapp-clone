import React from "react";
import { styled } from "styled-components"
import {RxAvatar} from "react-icons/rx"
import { MdDonutLarge } from "react-icons/md";
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {FiMoreVertical} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
import SideBarChat from "./SideBarChat";


const SideBar = () => {
    return (<Wrapper>
        <div className="header">
            <RxAvatar className="avatar"/>
            <div className="rheader">
                <button className="btn">
                    <MdDonutLarge className="icon"/>
                </button>
                <button className="btn">
                    <BsFillChatLeftTextFill className="icon"/>
                </button>
                <button className="btn">
                    <FiMoreVertical className="icon"/>
                </button>
            </div>
        </div>
        <div className="search">
            <div className="search-container">
                <AiOutlineSearch className="search-icon icon"/>
                <input type="text" placeholder="start a new chat"/>
            </div>
        </div>
        <div className="chats">
            <SideBarChat/>
            <SideBarChat/>
            <SideBarChat/>
        </div>
    </Wrapper>)
}

const Wrapper = styled.div`
   display:grid;
   grid-template-rows: auto auto 1fr;
   .header{
        display:grid;
        grid-template-columns:1fr auto;
        padding:1rem;
        gap:10rem;
   }
   .rheader{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:0.5rem;
   }
   .avatar{
    font-size:2rem;
   }
   .icon{
    font-size:1.5rem;
    color:gray;
   }

   .btn{
    border: none;
    background: transparent;
   }

   .search{
    background: #f6f6f6;
    padding: 0.5rem;
   }

   .search-container{
    background:white;
    width:100%;
    border-radius: 0.5rem;
    display:grid;
    grid-template-columns: auto auto;
    align-items:center;
    gap:0.2rem;
   }

   .search-icon{
        color: gray;
   }

   .search-container input{
    border:none;
    outline:none;
   }
`

export default SideBar