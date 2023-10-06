import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { fbAuth, fbLogin } from "../../config/firebase/firebase-methods";
import SMInput from "../../components/SMInput";
import SMButton from "../../components/SMButton";
// import {useDispatch} from 'react-redux'


export default function Login() {
  const [model, setModel] = useState<any>({});
//   const  dispatch = useDispatch();

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

   const navigate = useNavigate();
  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res: any) => {
        console.log(res);
        // dispatch(add({...res}))

        navigate("/student")
      })
      .catch((err) => {
        console.log(err);
      });
  };

useEffect(()=>{
fbAuth().then((res) =>{
console.log(res);
}).catch((err)=>{
  console.log(err)
})
},[])
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-5">
            <h1 className="text-3xl font-medium">Login</h1>
          </div>

          <div className="m-2">
            <SMInput
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="m-2">
            <SMInput
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="m-2">
            <SMButton onClick={LoginUser} label="Login" />
          </div>
          <div className="m-2">
        <p>If you haven't registered yet?<Link to="/signup">SignUp</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}