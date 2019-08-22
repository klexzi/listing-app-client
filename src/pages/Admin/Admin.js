import React, { useState } from "react";
import ProtectPage from "../../hoc/ProtectPage/ProtectPage";
import { Box, Button, Icon } from "@material-ui/core";
import ListingTable from "../../components/ListingTable/ListingTable";
import Navbar from "../../components/Navbar/Navbar";
import WithImageBackground from "../../hoc/WithImageBackground/WithImageBackground";
import BusinessForm from "../../components/BusinessForm/BusinessForm";
import ModalFade from "../../components/ModalFade/ModalFade";

const Admin = () => {
  const [modalOpen, toggleModal] = useState(false);
  const handleClose = () => {
    toggleModal(false);
  };
  return (
    <Box>
      <WithImageBackground>
        <Navbar />
      </WithImageBackground>
      <ModalFade open={modalOpen} handleClose={handleClose}>
        <BusinessForm onCompleted={handleClose} />
      </ModalFade>

      <Box display="flex" flexDirection="column" paddingX={20} paddingY={10}>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={() => toggleModal(true)}>
            Add Listing
            <Icon>add</Icon>
          </Button>
          <Button variant="contained">
            Add Category
            <Icon>add</Icon>
          </Button>
        </Box>

        <ListingTable />
      </Box>
    </Box>
  );
};

export default ProtectPage(Admin);
