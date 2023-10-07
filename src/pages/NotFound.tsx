import { Box, Typography } from "@mui/material";
import SMButton from "../components/SMButton";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg_img_home d-flex align-items-center justify-content-center">
    <div className="container row d-flex align-items-center justify-content-center">
       
        <div className="col-6 text-center text-white">
            <Typography className="py-2" variant="h2">404! Page Not Found.</Typography>
            <Typography className="py-2" variant="h4">The page you are trying to visit might not exist.</Typography>
            <div className="d-flex align-items-center justify-content-center gap-2 m-2 ">
                <SMButton onClick={()=>{navigate('/')}} label="Back to Home" className="text-white rounded"/>
            </div>
        </div>
    </div>
        </div>
  );
}
