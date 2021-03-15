import React, { FC, ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

interface NavProps {
  children: ReactNode;
}
const Nav: FC<NavProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="menu" color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Nav;
