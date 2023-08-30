
import React from 'react';
import styled from 'styled-components';
import SideBar from './components/Sidebar';
import Chat from './components/Chat';

const App = () => {
  return (<Wrapper>
    <div className="app-center">
      <SideBar/>
      <Chat/>
    </div>
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
