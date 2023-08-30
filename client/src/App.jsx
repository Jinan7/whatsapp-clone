
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBar from './components/Sidebar';
import Chat from './components/Chat';
import Pusher from 'pusher-js'
import axios from 'axios';
import fetchUtil from '../util';
import Login from './components/Login';
import StateProvider, { StateContext } from './StateProvider';


const App = () => {
  const [user, setUser] = useState(null)
  const [messages, setMessages] = useState([])
  const [state, reducer] = useContext(StateContext)

  const fetchData = async ()=>{
    const response = await fetchUtil.get('/messages/sync')
    setMessages(response.data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{

    const pusher = new Pusher("9d98ad2d5ba915745f7c", {
      cluster: 'eu'
    })

      const channel = pusher.subscribe('messages')
      channel.bind('inserted', (data)=>{
      console.log(data)
      setMessages([...messages, data])
  })
  return () => {
    channel.unbind_all()
    channel.unsubscribe()
  }


  },  [messages])

  
  return (<Wrapper>
    {state.user?<div className="app-center">
      <SideBar messages={messages}/>
      <Chat messages={messages}/>
    </div>:<Login/>}
  </Wrapper>)
}


const Wrapper = styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  background: #dadbd3;

  .app-center{
    display:grid;
    grid-template-columns: auto 1fr;
    background:#ededed;
    margin-top:-50px;
    height:90vh;
    width:90vw;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75)
  }
`
export default App
