import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'

const HomePage = () => {
    
    return (
        <Container maxW="xl" centerContent>
        <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg="white"
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            textAlign="center"
        >
            <Text fontSize="4xl" fontFamily="Poppins" fontWeight="extrabold">
            CommuSpace
            </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <Login />
                </TabPanel>
                <TabPanel>
                <Signup />
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Box>
    </Container>
    )
}

export default HomePage
