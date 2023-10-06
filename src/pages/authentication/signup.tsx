import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignUp } from "../../config/firebase/firebase-methods";


export default function SignUp() {
  const [model, setModel] = useState<any>({});
  const fillModel = (key: string, val: string) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="">
            <h1 className="text-3xl font-medium p-2">Sign Up</h1>
          </div>
          <div className="m-2">
            {/* <SMInput
              value={model.userName}
              onChange={(e: any) => fillModel("userName", e.target.value)}
              label="User Name"
            /> */}
          </div>
          <div className="m-2">
            {/* <SMInput
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            /> */}
          </div>
          <div className="m-2">
            {/* <SMInput
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            /> */}
          </div>
          <div className="m-2">
            {/* <SMButton onClick={signUpUser} label="Sign Up" /> */}
          </div>
          <div className="m-2">
            <p>
              Already Registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
