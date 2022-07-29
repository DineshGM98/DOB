import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "./context/AuthContext";
import {useNavigate} from 'react-router-dom'

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(user != null){
        navigate('/nic')
    }
  },[user]);

  return (
    <div>
      <h1>Signin</h1>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Signin;
