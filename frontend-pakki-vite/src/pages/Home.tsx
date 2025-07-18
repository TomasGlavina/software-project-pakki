// src/pages/Home.tsx
import { Box, Grid, Heading, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react';
import Calendar from '../components/Calendar';

const HomePage = () => {
  // Colors based on color mode
  const bgTop = useColorModeValue('white', 'gray.800');
  const bgBottom = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('brand.800', 'brand.200');

  return (
    <Box p={8} minHeight="100vh" bg={bgTop}>
      {/* Main Grid Layout */}
      <Grid templateRows="1fr 2fr" gap={8}>
        
        {/* Top Section: Credits, Personal Info, Attendance */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4} bg={bgTop} borderRadius="lg" boxShadow="md">
          {/* Credits */}
          <VStack spacing={2} align="center">
            <Heading size="xl" color={textColor}>Credits</Heading>
            <Text fontSize="3xl" color={textColor}>120</Text> {/* Replace with actual credits */}
          </VStack>

          {/* Personal Info */}
          <VStack spacing={1} align="center">
            <Heading size="md" color={textColor}>Full Name</Heading>
            <Text fontSize="sm" color={textColor}>D.O.B</Text>
            <Text fontSize="sm" color={textColor}>Degree Program</Text>
            <Text fontSize="sm" color={textColor}>Study Period</Text>
            <Text fontSize="sm" color={textColor}>Student ID</Text>
          </VStack>

          {/* Attendance Status */}
          <VStack spacing={1} align="center">
            <Heading size="md" color={textColor}>Attendance Status</Heading>
            <Text fontSize="sm" color={textColor}>Period of Attendance</Text>
            <Link color="brand.600" fontSize="sm">Update Attendance</Link>
          </VStack>
        </Grid>

        {/* Bottom Section: Curriculum and Calendar */}
        <Grid templateColumns="1fr 1fr" gap={6} p={4} bg={bgBottom} borderRadius="lg" boxShadow="md">
          {/* Curriculum */}
          <Box>
            <Heading size="lg" mb={4} color={textColor}>Curriculum</Heading>
            <VStack align="start" spacing={2}>
              <Link href="#">Bachelor of Software Engineering</Link>
              <Link href="#">Bachelor of Environmental Engineering</Link>
              <Link href="#">Bachelor of Textile Engineering</Link>
              <Link href="#">Bachelor of Media and Arts</Link>
              <Link href="#">Bachelor of Nursing</Link>
            </VStack>
          </Box>

          {/* Calendar */}
          <Box>
            <Heading size="lg" mb={4} color={textColor}>Calendar</Heading>
            <Box  borderRadius="md" h="200px" boxShadow="sm">
             <Calendar/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
