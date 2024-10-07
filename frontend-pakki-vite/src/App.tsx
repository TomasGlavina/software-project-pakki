import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import ThemeToggleButton from './components/ThemeToggleButton'

function App() {

  return (
    <Box 
      textAlign="center" 
      fontSize="xl" 
      p={4}
      minHeight='100vh'
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
    <Heading>
      Welcome to your University
    </Heading>

    <ThemeToggleButton />

    <Text mt={4}>
      In this part there will be a calendar, plus some tabs to go to the different sections of the app
    </Text>
    
    <Stack mt={4} direction="row" spacing={4} justify="center">
      <Button colorScheme="blue">Home</Button>
      <Button colorScheme="purple" variant="outline">Curricula</Button>
      <Button colorScheme="pink" variant="solid">Grades</Button>
      <Button colorScheme="red" variant="link">Enrollments</Button>
      <Button colorScheme="whiteAlpha" variant="ghost">Profile</Button>
    </Stack>
    
    </Box>
  )
}

export default App
