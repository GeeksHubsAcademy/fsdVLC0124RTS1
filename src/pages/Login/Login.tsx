
import { useState } from "react";
import { CInput } from "../../common/CInput/CInput";

import "./Login.css"
import { LoginData } from "../../interfaces";
import { LoginMe } from "../../services/apiCalls";

export const Login: React.FC = () => {

  const [credentials, setCredentials] = useState<LoginData>({
    email: "",
    password: ""
  })
  
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setCredentials((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
    }))
  }

  const logeameOtraVez = async ():Promise<void> => {

    const fetched = await LoginMe(credentials)

    console.log(fetched)
 }

  return (
  <div>
    <CInput 
        type={"email"}
        name={"email"}
        value={credentials.email || ""}
        placeholder={""}
        onChange={inputHandler}
    />
    <CInput 
        type={"password"}
        name={"password"}
        value={credentials.password || ""}
        placeholder={""}
        onChange={inputHandler}
    />
    <button onClick={logeameOtraVez}>LOG ME!</button>
  </div>);
};
