import styled from "@emotion/styled";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-overlays/Modal";
import index from "../../Selector";
import PackageList from "../Package/PackageList";
import PackageDetailList from "./PackageDetailList";

const PackageShow = ({ packages }: any) => {
  const PackageModal = styled(Modal)`
    position: fixed;
    width: 1500px;
    z-index: 1040;
    border: 1px solid #e5e5e5;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    top: 10%;
    left: 10%;
    display: flex;
    flex-wrap: no-wrap;
  `;

  const [show, setShow] = useState(false);
  const [packageNumber, setPackageNumber] = useState(0);

  const handlePackageSelect = (index: any) => {
    setPackageNumber(index);
  };

  return (
    <div className="modal-example">
      <Card
        variant="outlined"
        sx={{
          maxHeight: 272,
          maxWidth: 237,
          backgroundColor: "common.white",
          margin: 5,
          borderColor: "grey.500",
          borderRadius: 3,
        }}
        onClick={() => setShow(true)}
      >
        <CardActionArea>
          <Box
            sx={{
              minHeight: 55,
              backgroundColor: "rgb(130, 133, 224)",
              pt: 1.5,
            }}
          >
            <Typography
              sx={{ fontSize: 20 }}
              color="common.white"
              textAlign="center"
            >
              {packages[packageNumber].name}
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: 217,
            }}
          >
            <Typography sx={{ fontSize: 18, p: 4 }} color="black">
              {packages[packageNumber].detail}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>

      <PackageModal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="modal-label"
      >
        <div>
          <PackageList packages={packages} handleClick={handlePackageSelect} />
          <PackageDetailList
            packages={packages}
            packageNumber={packageNumber}
          />
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Save
          </button>
        </div>
      </PackageModal>
    </div>
  );
};

export default PackageShow;
function rand() {
  throw new Error("Function not implemented.");
}
