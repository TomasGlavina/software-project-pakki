import './App.css'
import { Box, Button, Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react'
import ThemeToggleButton from './components/ThemeToggleButton'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Curricula from './pages/Curricula';
import Grades from './pages/Grades';
import Enrollments from './pages/Enrollments';
import Profile from './pages/Profile';

function App() {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const navBgColor = bgColor[colorMode];

  return (
    <Router>
      <Box 
        textAlign="left" 
        fontSize="xl" 
        p={4}
        minHeight='100vh'
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex 
          as="nav" 
          position="fixed" 
          top="0" 
          width="100%" 
          bg="navBgColor" 
          p={4} 
          boxShadow="md" 
          justifyContent="space-between"
          alignItems="center"
          zIndex="1"
        >
          <Heading size="md">University App</Heading>
          <Stack direction="row" spacing={4}>
            <Button as={Link} to="/" colorScheme="blue" variant="outline">Home</Button>
            <Button as={Link} to="/curricula" colorScheme="blue" variant="outline">Curricula</Button>
            <Button as={Link} to="/grades" colorScheme="blue" variant="outline">Grades</Button>
            <Button as={Link} to="/enrollments" colorScheme="blue" variant="outline">Enrollments</Button>
            <Button as={Link} to="/profile" colorScheme="blue" variant="outline">Profile</Button>
            <ThemeToggleButton />
          </Stack>
        </Flex>
        <Box mt="80px" width="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curricula" element={<Curricula />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </Box>
      </Box>
    </Router>
  )
}

export default App
