// src/pages/Login.tsx
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, Image, VStack, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ThemeToggleButton from '../components/ThemeToggleButton';
import logo from '../assets/1582638612_tampere-university-logo.png';

// Define the prop type for the Login component
interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();         // Update the login state
    navigate('/');     // Redirect to the home page
  };

  // Set colors dynamically based on the color mode
  const bgColor = useColorModeValue('gray.100', 'gray.800');         // Background color for main container
  const leftColumnBgColor = useColorModeValue('brand.500', 'grey.800'); // Background color for logo section
  const formBgColor = useColorModeValue('white', 'gray.800');        // Background color for form container
  const headingColor = useColorModeValue('brand.800', 'brand.300');  // Heading color

  return (
    <Flex minHeight="100vh" bg={bgColor}>
      {/* Left Column with Logo */}
      <Box 
        width="50%" 
        bg={leftColumnBgColor}
        display="flex" 
        alignItems="center" 
        justifyContent="center"
      >
        <Image src={logo} alt="Logo" boxSize="60%" objectFit="contain" />
      </Box>

      {/* Right Column with Login Form */}
      <Flex 
        width="50%" 
        alignItems="center" 
        justifyContent="center" 
        bg={formBgColor}
        p={8}
      >
        <Box width="100%" maxWidth="400px">
          {/* Dark Mode Toggle Button */}
          <Flex justifyContent="flex-end" mb={4}>
            <ThemeToggleButton />
          </Flex>

          {/* Login Form */}
          <VStack spacing={6}>
            <Heading as="h2" size="lg" textAlign="center" color={headingColor}>
              Log In
            </Heading>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>

            <Button colorScheme="brand" width="full" onClick={handleLogin}>
              Log In
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
