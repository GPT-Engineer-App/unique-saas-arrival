import { Container, Box, Heading, Text, Button, VStack, HStack, Image, IconButton } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to SaaS Business
        </Heading>
        <Text fontSize="xl" mb={6}>
          Transforming the way you manage your business with our innovative solutions.
        </Text>
        <Button colorScheme="teal" size="lg" mb={4}>
          Get Started
        </Button>
        <Button variant="outline" colorScheme="teal" size="lg">
          Learn More
        </Button>
      </Box>

      <VStack spacing={8} py={10}>
        <HStack spacing={4}>
          <IconButton aria-label="Feature 1" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
          <Text fontSize="lg">Feature 1: Seamless Integration</Text>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Feature 2" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
          <Text fontSize="lg">Feature 2: Real-time Analytics</Text>
        </HStack>
        <HStack spacing={4}>
          <IconButton aria-label="Feature 3" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
          <Text fontSize="lg">Feature 3: 24/7 Support</Text>
        </HStack>
      </VStack>

      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={4}>
          Why Choose Us?
        </Heading>
        <Text fontSize="lg" mb={6}>
          Our platform offers unparalleled features and benefits that help you streamline your business operations.
        </Text>
        <Image src="/images/saas-illustration.png" alt="SaaS Illustration" boxSize="400px" mx="auto" />
      </Box>
    </Container>
  );
};

export default Index;