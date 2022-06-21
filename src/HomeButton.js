import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function HomeButton(){
  const navigate = useNavigate();
  return(
    <Button
      variant="contained"
      color="success"
      onClick={() => navigate("/")}
    >
      Home
    </Button>
  );
}

export default HomeButton;
