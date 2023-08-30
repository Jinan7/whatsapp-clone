import { styled } from "styled-components"

import {FcGoogle} from 'react-icons/fc'
import {auth, provider} from '../firebase'
import { useContext } from "react"
import { StateContext } from "../StateProvider"
import { actionTypes } from "./reducer"

const Login = () => {
    const [state, dispatch] = useContext(StateContext)
    const signIn = async () => {
       try {
        const result = await auth.signInWithPopup(provider)
        dispatch({type:actionTypes.SET_USER,
                user: result.user
        })
       } catch (e){
        console.log(e)
       }


    }
    return (<Wrapper>
        <div className="container">
        <FcGoogle className="icon"/>
            <div className="text">
                <h1>sign in to messaging app</h1>
            </div>
            <button onClick={signIn}>sign in with google</button>
            
        </div>
    </Wrapper>)
}





const Wrapper = styled.div`
    background: #f8f8f8;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items:center;

    .icon{
        font-size:3rem;
        margin-bottom: 2rem;
    }
    .container{
        padding: 6rem;
        text-align:center;
        background: white;
        border-radius: 1rem;
        box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
        color: green;
        
    }

    .text{
        text-transform:capitalize;
    }
    .container img{
        object-fit:contain;
        height: 5rem;
        margin-bottom: 3rem;
    }

    .container button {
        margin-top: 3rem;
        text-transform: inherit;
        background: #0a8d48;
        color:white;
        border:none;
        padding: 1rem;
        border-radius: 3rem;
        font-size: 1rem;
        text-transform:capitalize;
    }
`

export default Login