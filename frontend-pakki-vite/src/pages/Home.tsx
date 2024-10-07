import React from 'react';
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import ThemeToggleButton from '../components/ThemeToggleButton';

const Home: React.FC = () => {
    return (
        <Box
        textAlign="left" 
            fontSize="xl" 
            p={4}
            minHeight='100vh'
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            >
            
        <Heading>
          Welcome to your University
        </Heading>

        <Text mt={4}>
          In this part there will be a calendar, plus some tabs to go to the different sections of the app
        </Text>

        </Box>
    );
};

export default Home;
