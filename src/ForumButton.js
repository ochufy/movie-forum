import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function ForumButton(props){
  const navigate = useNavigate();
  return(
    <Button
      variant="outlined"
      color="success"
      onClick={() => navigate(`/forum/${props.id}`, { replace: true, state:{title: `${props.title}`}})}
    >
      Forum
    </Button>
  );
}

export default ForumButton;
