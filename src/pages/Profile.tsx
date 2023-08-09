import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}></ListIcon>
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}></ListIcon>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error dignissimos sint cupiditate! Nostrum quidem non qui, veritatis aspernatur earum molestiae accusamus ab commodi labore incidunt, dignissimos sit! Eligendi, nihil!
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}></ListIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam error maxime autem.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam error maxime autem.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"></ListIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam error maxime autem.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"></ListIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere nam error maxime autem.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Profile;