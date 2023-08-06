import React, { useState } from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

const SideDrawer = () => {
  const [chats, setChats] = useState([
    // Sample chat data (Replace this with your actual chat data)
    { id: 1, content: 'Hello there!', timestamp: '2023-08-06 12:00:00' },
    { id: 2, content: 'How are you?', timestamp: '2023-08-06 12:05:00' },
    { id: 3, content: 'I am doing well!', timestamp: '2023-08-06 12:10:00' },
  ]);

  const handleSearch = () => {
    // Add your search logic here
    console.log('Search button clicked!');
  };

  return (
    <VStack
      className="side-drawer"
      align="center"
      justify="space-between"
      spacing={4}
      p={4}
      bg="gray.200"
      borderRadius="md"
      boxShadow="md"
    >
      <Button colorScheme="teal" onClick={handleSearch}>
        Search
      </Button>
      <VStack align="flex-start" spacing={2}>
        {chats.map((chat) => (
          <Box
            key={chat.id}
            p={2}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            w="100%"
          >
            <div className="chat-content">{chat.content}</div>
            <div className="chat-timestamp">{chat.timestamp}</div>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default SideDrawer;
