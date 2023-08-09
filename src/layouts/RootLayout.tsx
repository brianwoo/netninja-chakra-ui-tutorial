import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* if mobile screen, span 6 cols, lg screen span 2, etc.... */}
      <GridItem as="aside" colSpan={{ base: 6, lg: 2, xl: 1 }} bg="brand.600" minHeight={{ lg: '100vh' }} p={{ base: '20px', lg: '30px' }}>
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>);
}

export default RootLayout;