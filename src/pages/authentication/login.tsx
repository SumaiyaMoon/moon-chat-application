import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { fbAuth, fbLogin } from "../../config/firebase/firebase-methods";
import SMInput from "../../components/SMInput";
import SMButton from "../../components/SMButton";
import { Typography, Box, Paper, Grid } from "@mui/material";

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
    <Box
    className="bg_img_login"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Paper className="paperColor" elevation={3} sx={{ p: 4, maxWidth: 400 }}>
      <Typography variant="h6" className="fw-bold" gutterBottom>
        Login
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SMInput
              value={model.email}
              name="email"
              label="Email"
              type="email"
              onChange={(e: any) => fillModel("email", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <SMInput
              value={model.password}
              name="password"
              label="Password"
              type="password"
              onChange={(e: any) => fillModel("password", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <SMButton
              type="button"
              onClick={LoginUser}
              label="Login"
            />
            <Typography>
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-light">
                SingUp
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </Box>
  );
}