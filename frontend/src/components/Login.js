import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [show,setShow] = useState(false)

    const handleClick = function(){
        setShow(!show)
    }

    const handleSubmit = function(){

    }
    
    return (
        <VStack spacing= "25px">
            <FormControl id = "email" type="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                placeholder='Enter your email'
                onChange={function(e){
                    setEmail(e.target.value)
                }}
                ></Input>
            </FormControl>
            
            <FormControl id = "password" type="password" isRequired>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <InputGroup>
                    <Input
                    type = {show?"text":"password"}
                    placeholder='Enter your password'
                    onChange={function(e){
                        setPassword(e.target.value)
                    }}
                    ></Input>
                    <InputRightElement marginRight="20px">
                    <Button 
                    variant='outline' 
                    h="1.75rem" size="m"
                    p="5px"
                    onClick={handleClick}colorScheme='blue'
                    >
                        {show?"Hide":"Show"}
                    </Button>
                    </InputRightElement>
                </InputGroup>
                
            
            </FormControl>
            <Button colorScheme='blue' variant='solid'type="submit" onClick={handleSubmit}>
                Login
            </Button>
        </VStack>
    )
}

export default Login
