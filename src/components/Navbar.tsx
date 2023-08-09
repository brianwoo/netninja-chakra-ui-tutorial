import { UnlockIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react";
import { MouseEvent } from "react";

const Navbar = () => {

  const toast = useToast();

  const showToast = (e: MouseEvent<HTMLElement>) => {
    toast({
      title: 'Logged out',
      description: "Successfully logged out",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
      icon: <UnlockIcon />,
    });
  };

  return (
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">1</Box>
    //   <Box w="150px" h="50px" bg="blue">2</Box>
    //   <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //   <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>


    // NOTE: alignItems: align vertically whereas justifyItems: align horizontally
    // https://www.w3schools.com/cssref/css3_pr_align-items.php
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar bg="purple" name="Mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;