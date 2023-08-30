import { useEffect, useState } from "react"
import { styled } from "styled-components"

const SideBarChat = () => {
    const [seed, setSeed] = useState('')

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    }, [])
    return (<Wrapper>
        <img src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} alt="avatar" className="avatar"/>
        <div className="info">
            <h2>room name</h2>
            <p>last msg</p>
        </div>
    </Wrapper>)
}

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:auto 1fr;
    gap:1rem;
    padding:1rem;
    border-bottom: 1px solid grey;
    background: white;
    cursor: pointer;
    .avatar{
        width:3rem;
        height:3rem;
        object-fit:cover;
    }
    .info h2{
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    
`

export default SideBarChat