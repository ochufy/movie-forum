import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function ForumButton(){
  const navigate = useNavigate();
  return(
    <Button
      variant="contained"
      color="success"
      onClick={() => navigate("/forum")}
    >
      Forum
    </Button>
  );
}

export default ForumButton;
