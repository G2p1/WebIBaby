import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import Cookies from "js-cookie";
import './ModalAuth.css';
import LogIn from "../../api/Login";
import SignUp from "../../api/SignUp";
import styled from "styled-components";

const StyledClose = styled.div`
display: flex;
justify-content: space-around;
flex-flow: column nowrap;

div{
    
    width:28px;
    height: 2px;
    background-color:#f1f1f1};
    border-radius: 20px;

    div:nth-child(1){
        transform: rotate(45deg);
    }
    div:nth-child(2){
        transform: rotate(-45deg);
    }


}
`;

function ModalAuth  ({ isOpen, onClose, change })  {
    const navigate = useNavigate();
    const [isLogining, setLogining] = useState(true);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    let JWToken;

    async function login() {
        try {
            JWToken = await LogIn(username, password);
            Cookies.set('token', JWToken, { expires: 120 });
            if (JWToken) {
                change();
                navigate(PathConstants.LEARNING);
            }
        }
        catch {
            alert('alert');
        }
    }
    async function signup() {
        try {
            JWToken = await SignUp(username, password);
            Cookies.set('token', JWToken, { expires: 120 });
            if (JWToken) {
                change();
                navigate(PathConstants.LEARNING);
            }
        }
        catch {
            alert('alert');
        }
    }

    return (
        <>{isOpen && (
            <div className="modalAuth">
                <div className="modal-wrapper">
                    <div className="modal-content-auth">
                        
                        <button className="modal-close-button"
                            onClick={() => onClose()}
                        >
                            <StyledClose>
                                <div />
                                <div />
                            </StyledClose>
                        </button>
                        <div className="modal-swotch-login">
                            <button className="modal-login" onClick={() => setLogining(true)}>Login</button>
                            <button className="modal-signup" onClick={() => setLogining(false)}>Signup</button>
                        </div>
                        {isLogining == true && (
                            <div className="content-login">
                                <div className="pre-login">
                                    HeyYo! <br /> Log in! and take your adventures
                                </div>
                                <div>
                                    Username
                                    <input
                                        value={username}
                                        placeholder="Enter username"
                                        onChange={ev => setUsername(ev.target.value)}
                                        className="input-box" />
                                    <label className="errorLabel">{usernameError}</label>
                                </div>
                                <div>
                                    Password
                                    <input
                                        type='password'
                                        value={password}
                                        placeholder="Enter password"
                                        onChange={ev => setPassword(ev.target.value)}
                                        className="input-box" />
                                    <label className="errorLabel">{passwordError}</label>
                                </div>
                                <button className="login-button" onClick={() => login()}>LogIn</button>
                            </div>
                        )}

                        {isLogining == false && (
                            <div className="content-signup">
                                <div className="pre-signup">
                                    HeyYo! <br /> Sign up! and take your adventures
                                </div>
                                <div>
                                    Username
                                    <input
                                        value={username}
                                        placeholder="Enter username"
                                        onChange={ev => setUsername(ev.target.value)}
                                        className="input-box" />
                                    <label className="errorLabel">{usernameError}</label>
                                </div>
                                <div>
                                    Password
                                    <input
                                        type='password'
                                        value={password}
                                        placeholder="Enter password"
                                        onChange={ev => setPassword(ev.target.value)}
                                        className="input-box" />
                                    <label className="errorLabel">{passwordError}</label>
                                </div>
                                <button className="signup-button" onClick={signup}>SignUp</button>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        )
        }
        </>
    )
}

export default ModalAuth;