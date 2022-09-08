import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function FadeMenu({ component: Component, deleteMake, index }) {
  // console.log(Component, deleteMake, index, "DeleteMenu");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (index) => {
    // console.log(e, "clicked");
    console.log(index, "index");
    deleteMake(index);
    setAnchorEl(null);
  };

  return (
    <div>
      <Component
        style={{ cursor: "pointer" }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></Component>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose(index)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
