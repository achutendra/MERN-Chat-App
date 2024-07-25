import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { orange } from '../../constants/color'
import {Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon} from '@mui/icons-material'

const SearchDialog = lazy(() => import('../specific/Search'));
const NotificationDialog = lazy(() => import('../specific/Notifications'));
const NewGroup = lazy(() => import('../specific/NewGroup'));


const Header = () => {

  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);


  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  }

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  }

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  }

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  }

  const navigateToGroup = () => {
    navigate("/groups");;
  }

  const logoutHandler = () => {
    console.log("logout");
  }

  return (
    <>
      <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position='static' sx={{bgcolor: orange}}>
          <Toolbar>
            <Typography
              variant='h6'
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                }
              }}
            >
              Chat App
            </Typography>
            <Box sx={{
                display: {
                  xs: "block",
                  sm: "none",
                }
              }}>
                <IconButton color='inherit' onClick={handleMobile}>
                  <MenuIcon />
                </IconButton>              
            </Box>
            <Box 
                sx={{
                  flexGrow: 1,
                }}
            />
            <Box>
              <IconBtn title="Search" icon={<SearchIcon />} onclick={openSearch} />
              <IconBtn title="New Group" icon={<AddIcon />} onclick={openNewGroup} />
              <IconBtn title="Manage Groups" icon={<GroupIcon />} onclick={navigateToGroup} />
              <IconBtn title="Notifications" icon={<NotificationsIcon />} onclick={openNotification} />
              <IconBtn title="Logout" icon={<LogoutIcon />} onclick={logoutHandler} />
              {/* <IconButton color='inherit' size='large' onClick={openSearchDialog}>
                  <SearchIcon />
              </IconButton>

              <Tooltip title="New Group">
                <IconButton color='inherit' size='large' onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Manage Groups">
                <IconButton color='inherit' size='large' onClick={navigateToGroup}>
                  <GroupIcon />
                </IconButton>
              </Tooltip> */}
            </Box>
          </Toolbar>        
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>

      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}

    </>
  )
}

const IconBtn = ({title, icon, onclick}) => {
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' size='large' onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header