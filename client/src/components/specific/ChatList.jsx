import { Stack } from '@mui/material'
import React from 'react'

const ChatList = ({
  w="100%", 
  chats=[], 
  chatId, 
  onlineUsers=[], 
  newMessageAlert=[{
  chatId: "1",
  count: 0,
  }],
  handleDeleteChat,
}) => {
return (
  <Stack width={w} direction={"column"} >
    {
      chats?.map((data) => {
        return (
          <div>{data}</div>
        )
      })
    }
  </Stack>
)
}

export default ChatList