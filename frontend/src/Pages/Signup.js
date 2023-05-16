import { AbsoluteCenter, Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignupPage = () => {
    const [userName,setUserName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmpassword,setConfirmPassword] = useState()
    const [phone,setPhone] = useState()
    const [DOB,setDOB] = useState()
    const [show,setShow] = useState(false)
    const [proPic, setProPic] = useState();
    const [loading,setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    const handleClick = function(){
        setShow(!show)
    }

    const handleSubmit = async function(){
        setLoading(true)
        if(!userName || !email || !password || !confirmpassword){
            toast({
                position: 'bottom-left',
                status : "warning",
                duration : 4000,
                isClosable : true,
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Please fill all the fields!
                    </Box>
                ),
            })
            console.log("hlo");
            return
        }

        if(confirmpassword !== password){
            toast({
                position: 'bottom-left',
                status : "warning",
                duration : 4000,
                isClosable : true,
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        Passwords don't match
                    </Box>
                ),
            })
            console.log("hlo");
            return
        }

        try{
            const config = {
                headers : {
                    "Content-type" : "application/json",
                },
            }

            const {data} = await axios.post("/user",{userName,proPic,phone,email,DOB,password},config)  
            // console.log(data)
            console.log("hi");
            toast({
                position: 'bottom-left',
                status : "success",
                duration : 4000,
                isClosable : true,
                render: () => (
                    <Box color='white' p={3} bg='blue.500'>
                        User SignUp successful
                    </Box>
                ),
            })
            localStorage.setItem('userInfo',JSON.stringify(data))
            setLoading(false)
            navigate('/login')
            console.log("hi after localstorage");
        }catch(error){
            toast({
                position: 'bottom-left',
                status: 'warning',
                duration: 4000,
                isClosable: true,
                render: () => (
                <Box color='white' p={3} bg='blue.500'>
                    {error.response.data.message}
                </Box>
                ),
            });
        }
        setLoading(false)
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
                setProPic(data.url.toString())
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
        <AbsoluteCenter axis="both">
        <VStack spacing="25px">
            <Box display="flex" gap="20px">
            <FormControl id="name" type="text" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                placeholder='Enter your name'
                onChange={e => setUserName(e.target.value)}
                />
            </FormControl>

            <FormControl id="signUpEmail" type="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                placeholder='Enter your email'
                onChange={e => setEmail(e.target.value)}
                />
            </FormControl>
            </Box>

            <Box display="flex" gap="20px" flexGrow={1}>
            <FormControl id="phone" type="text" isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                placeholder='Enter your Phone Number'
                onChange={e => setPhone(e.target.value)}
                />
            </FormControl>

            <FormControl id="dob" type="text" isRequired>
                <FormLabel>DOB</FormLabel>
                <Input
                placeholder='Date of Birth'
                type='date'
                onChange={e => setDOB(e.target.value)}
                />
            </FormControl>
            </Box>

            <Box display="flex" gap="20px" flexGrow={1}>
            <FormControl id="signUpPassword" type="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input
                    type={show ? "text" : "password"}
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}
                />
                <InputRightElement marginRight="20px">
                    <Button
                    variant='outline'
                    h="1.75rem" size="m"
                    p="5px"
                    onClick={handleClick}
                    colorScheme='blue'
                    >
                    {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id="signUpConfirmPass" type="text" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                <Input
                    placeholder='Confirm your password'
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                </InputGroup>
            </FormControl>
            </Box>

            <Box display="flex" gap="20px" flexGrow={1}>
            <FormControl id="pic" isRequired>
                <FormLabel>Upload Your Image</FormLabel>
                <Input
                type="file"
                p={1.5}
                accept='image/*'
                onChange={e => postDetails(e.target.files[0])}
                />
            </FormControl>
            </Box>

            <Button
            colorScheme='blue'
            variant='solid'
            type="submit"
            onClick={handleSubmit}
            isLoading={loading}
            >
            Signup
            </Button>
        </VStack>
        </AbsoluteCenter>

    )
}

export default SignupPage
