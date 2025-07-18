import { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Stack, useColorMode } from '@chakra-ui/react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Curricula from './pages/Curricula';
import Grades from './pages/Grades';
import Enrollments from './pages/Enrollments';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'white', dark: 'gray.800' };
  const navBgColor = bgColor[colorMode];

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to login if not logged in and not already on login page
  useEffect(() => {
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [isLoggedIn, location, navigate]);

  const isLoginPage = location.pathname === '/login';

  return (
    <Box
      textAlign="left"
      fontSize="xl"
      p={0}
      m={0}
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg={bgColor[colorMode]}
    >
      {!isLoginPage && (
        <Flex
          as="nav"
          position="fixed"
          top="0"
          width="100%"
          bg={navBgColor}
          p={4}
          boxShadow="md"
          justifyContent="space-between"
          alignItems="center"
          zIndex="1"
        >
          <Heading size="md" color="brand">University App</Heading>
          <Stack direction="row" spacing={4}>
            <Button as={Link} to="/" colorScheme="brand" variant="outline">Home</Button>
            <Button as={Link} to="/curricula" colorScheme="brand" variant="outline">Curricula</Button>
            <Button as={Link} to="/grades" colorScheme="brand" variant="outline">Grades</Button>
            <Button as={Link} to="/enrollments" colorScheme="brand" variant="outline">Enrollments</Button>
            <Button as={Link} to="/profile" colorScheme="brand" variant="outline">Profile</Button>
            <ThemeToggleButton />
          </Stack>
        </Flex>
      )}

      <Box mt={!isLoginPage ? '80px' : '0'} width="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="/curricula" element={<Curricula />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
