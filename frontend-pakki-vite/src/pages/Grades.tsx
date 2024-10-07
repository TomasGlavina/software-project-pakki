import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Grades: React.FC = () => {
    return (
        <Box
            textAlign="left" 
            fontSize="xl" 
            p={4}
            minHeight='100vh'
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%">
            <Heading as="h1">Grades</Heading>
            <Text mt={4}>
          In this part there will be a calendar, plus some tabs to go to the different sections of the app
        </Text>
        </Box>
    );
};

export default Grades;