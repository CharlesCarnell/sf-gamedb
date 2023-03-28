

import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link';

import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material'

import {
  AccountCircle,
  Logout,
  Settings,
} from '@mui/icons-material';


export default function AccountMenu() {
  const { data: session } = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      { session ?
        <IconButton size="large" edge="end" color="inherit">
          <Tooltip title="Account Settings">
            <AccountCircle onClick={ handleMenuClick } />
          </Tooltip>
          <Menu
            anchorEl={ anchorEl }
            open={ open }
            onClose={ handleMenuClose }
            onClick={ handleMenuClose }
            PaperProps={ {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            } }
            transformOrigin={ { horizontal: 'right', vertical: 'top' } }
            anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
          >
            <MenuItem onClick={ handleMenuClose }>
              <Link href="/account">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <>
                  Settings
                </>
              </Link>
            </MenuItem>
            <MenuItem onClick={ () => { handleMenuClose(); signOut() } }>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </IconButton>
      :
        <IconButton size="large" edge="end" color="inherit">
          <Tooltip title="Login">
            <AccountCircle onClick={ () => signIn() } />
          </Tooltip>
        </IconButton>
      }
    </>
  );
}
