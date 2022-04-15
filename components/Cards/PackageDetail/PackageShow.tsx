import styled from "@emotion/styled";
import { Card, CardActionArea, Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Modal from "react-overlays/Modal";
import index from "../../Selector";
import PackageList from "../Package/PackageList";
import PackageDetailList from "./PackageDetailList";

const PackageShow = ({ packages, link }: any) => {
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
  const [packageDetailNumber, setPackageDetailNumber] = useState(0);

  const handlePackageSelect = (index: any) => {
    setPackageNumber(index);
  };

  const handlePackageDetailSelect = (index: any) => {
    setPackageDetailNumber(index);
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
            <Typography
              sx={{ fontSize: 16 }}
              color="common.black"
              textAlign="center"
            >
              ราคาเริ่มต้น <br></br>
              {
                packages[packageNumber].package[packageDetailNumber]
                  .specialprice
              }{" "}
              ฿
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="common.black"
              textAlign="center"
            >
              ค่าบริการล่วงหน้า <br></br>
              {packages[packageNumber].package[packageDetailNumber].prepaid} ฿
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
          <PackageList
            packages={packages}
            handleClick={handlePackageSelect}
            handlePackageDetailSelect={handlePackageDetailSelect}
          />
          <PackageDetailList
            packages={packages}
            packageNumber={packageNumber}
            handlePackageDetailSelect={handlePackageDetailSelect}
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: 16 }}
          color="common.black"
          textAlign="center"
        >
          {packages[packageNumber].package[packageDetailNumber].specialprice} ฿
        </Typography>
        <Typography
          sx={{ fontSize: 16 }}
          color="common.black"
          textAlign="center"
        >
          {packages[packageNumber].package[packageDetailNumber].prepaid} ฿
        </Typography>
        <Typography
          sx={{ fontSize: 16 }}
          color="common.black"
          textAlign="center"
        >
          {packages[packageNumber].package[packageDetailNumber].type} เดือน
        </Typography>
        <Typography
          sx={{ fontSize: 16 }}
          color="common.black"
          textAlign="center"
        >
          {packages[packageNumber].package[packageDetailNumber].package} ฿ /
          เดือน
        </Typography>
        <Typography
          sx={{ fontSize: 20 }}
          color="common.black"
          textAlign="center"
        >
          {(
            parseFloat(
              packages[packageNumber].package[
                packageDetailNumber
              ].specialprice.replace(/,/g, "")
            ) +
            parseFloat(
              packages[packageNumber].package[packageDetailNumber].prepaid
                .replace(/,/g, "")
                .replace(/-/g, "0")
            ) +
            parseFloat(
              packages[packageNumber].package[packageDetailNumber].type.replace(
                /,/g,
                ""
              )
            ) *
              parseFloat(
                packages[packageNumber].package[
                  packageDetailNumber
                ].package.replace(/,/g, "")
              )
          ).toLocaleString()}{" "}
          ฿
        </Typography>
        <a href={link}>
          <Button variant="contained" sx={{ width: "100%" }}>
            ซื้อเลย
          </Button>
        </a>
      </Box>
    </div>
  );
};

export default PackageShow;
function rand() {
  throw new Error("Function not implemented.");
}
