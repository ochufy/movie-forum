import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserAuth } from './Context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
      try {
        await logOut()
        navigate('/')

      } catch (error) {
        console.log(error)
      }
  };

  return (
    <div>
      <IconButton
        size="large"
        title={user?.displayName}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          position: "fixed",
          ml: "95%",
          mt: "0.05%",
          color: "#635666",
          "&:hover": {color: "#898AA6"}
        }}
      >
        <AccountCircleIcon fontSize="large"/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
