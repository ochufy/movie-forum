import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Forum(){
  const navigate = useNavigate();
  return(
    <div>
    <h1>FORUM</h1>
    <Button
      variant="contained"
      color="success"
      onClick={() => navigate("/")}
    >
      Home
    </Button>
    </div>
  );
}

export default Forum;
