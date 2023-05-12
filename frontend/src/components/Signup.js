import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [show,setShow] = useState(false)
    const [pic, setPic] = useState();
    const [loading,setLoading] = useState(false)
    const toast = useToast()

    const handleClick = function(){
        setShow(!show)
    }

    const handleSubmit = function(){

    }
    
    const postDetails = function(pics){
        setLoading(true)
        if(pics===undefined){
            toast({
                position: 'bottom-left',
                status : "warning",
                duration : 4000,
                isClosable : true,
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Please select an image!
                    </Box>
                ),
            })
        }
        if(pics.type === "image/jpeg" || pics.type === "image/jpg" || pics.type === "image/png" ){
            const data = new FormData()
            data.append("file",pics)
            data.append("upload_preset","commuSpace")
            data.append("cloud_name", "dp4rydcsb")
            fetch("https://api.cloudinary.com/v1_1/dp4rydcsb/image/upload",{
                method : "post",
                body : data,
            }).then(function(res){
                return res.json()
            }).then(function(data){
                setPic(data.url.toString())
                console.log(data.url.toString());
                setLoading(false)
            }).catch(function(err){
                console.log(err);
                setLoading(false)
            })
        }else{
            toast({
                position: 'bottom-left',
                status : "warning",
                duration : 4000,
                isClosable : true,
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Please select an image!
                    </Box>
                ),
            })
            setLoading(false)
        }
    }

    return (
        <VStack spacing= "25px">
            <FormControl id = "name" type="text" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                placeholder='Enter your name'
                onChange={function(e){
                    setName(e.target.value)
                }}
                ></Input>
            </FormControl>

            <FormControl id = "signUpEmail" type="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                placeholder='Enter your email'
                onChange={function(e){
                    setEmail(e.target.value)
                }}
                ></Input>
            </FormControl>
            
            <FormControl id = "signUpPassword" type="password" isRequired>
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

                <FormControl id = "pic" isRequired>
                    <FormLabel>Upload Your Image</FormLabel>
                    <Input
                    type = "file"
                    p={1.5}
                    accept='image/*'
                    onChange={function(e){
                        postDetails(e.target.files[0])
                    }}
                    ></Input>
                </FormControl>

            </FormControl>
            <Button colorScheme='blue' variant='solid' 
                type="submit" onClick={handleSubmit}
                isLoading = {loading}
            >
                Signup
            </Button>
        </VStack>
    )
}

export default Signup
