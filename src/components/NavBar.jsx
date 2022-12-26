import { AppBar, Badge, Button, Card, ClickAwayListener, Grid, IconButton, InputBase, MenuItem, Paper, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { useStateValue } from "../state/stateProvider";

const NavBar = () => {
  const [{ profile }, { }] = useStateValue();
  console.log("NavBar===", profile);

  const [text, setText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const history = useNavigate();
  const search = () => {
    history(`/q-${text}`);
  }
  const logoutnow = () => {
    window.localStorage.clear()
    window.location.href = '/';
  }
  const orderpage = () => {
    history('/orders')
  }
  const profilepage = () => {
    history(`/profile-${profile?.username}`)
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container>
          <Button onClick={() => history("/")} color="inherit">
            <Typography>CWR-SHOP</Typography>
          </Button>
          <Paper style={{ margin: '0 20px' }}>
            <InputBase
              value={text}
              placeholder="Search Now..."
              style={{ padding: '10px' }}
              onChange={(e) => setText(e.target.value)}
            />
            <IconButton
              disabled={text.length <= 0 ? true : false}
              onClick={search}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        {
          profile === null ?
            <Button color='inherit' onClick={() => { history('/login') }} >Login</Button>
            :
            <>
              <IconButton onClick={orderpage} color="inherit">
                <Badge badgeContent="3" color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <IconButton onClick={() => setShowMenu(true)} color="inherit">
                <AccountCircleRoundedIcon />
              </IconButton>
              {
                showMenu &&
                <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                  <Card style={{
                    position: 'fixed',
                    top: '50px',
                    right: '10px'
                  }}>
                    <MenuItem onClick={profilepage}>Profile</MenuItem>
                    <MenuItem onClick={logoutnow}>Logout</MenuItem>
                  </Card>
                </ClickAwayListener>
              }
            </>
        }

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;