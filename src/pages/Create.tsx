import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

const Create = () => {
  return (
    <Box maxW="480px">
      {/* From react-router-dom coz Chakra doesn't have a form component */}
      <Form method="POST" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name</FormLabel>
          <Input type="text" name="title"></Input>
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description</FormLabel>
          <Textarea
            placeholder="Enter a detailed desc for the task"
            name="description" />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple"></Checkbox>
          <FormLabel mb="0px" ml="10px">Make this a priority task.</FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}


export const createAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  };

  console.log(task);

  return redirect('/');
}

export default Create;