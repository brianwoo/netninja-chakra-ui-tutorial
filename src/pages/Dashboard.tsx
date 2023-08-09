import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {

  const tasks = useLoaderData() as Task[];

  return (
    // We can use num of columns and/or minChildWidth to achieve 
    // a responsive design
    // <SimpleGrid columns={4} spacing={10} >    
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map((task) => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.img}></Avatar>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>
          <Divider borderColor="gray.200" />
          <CardFooter>
            <HStack>
              <Button leftIcon={<ViewIcon />} variant="ghost">Watch</Button>
              <Button leftIcon={<EditIcon />} variant="ghost">Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

interface Task {
  id: number,
  title: string,
  description: string,
  author: string,
  img: string
}

export const tasksLoader = async (): Promise<Task[]> => {
  const res = await fetch('http://localhost:3010/tasks');
  return res.json();
}

export default Dashboard;