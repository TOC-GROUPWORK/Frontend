import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  Box,
  Typography,
  Button,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import { width } from "@mui/system";
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
          backgroundColor: "common.white",
          marginTop: 3,
          borderColor: "grey.500",
          borderRadius: 3,
        }}
        onClick={() => setShow(true)}
      >
        <CardActionArea>
          <Box
            sx={{
              minHeight: 55,
              // backgroundColor: "secondary.dark",
              // backgroundColor: "#A853F4",
              background:
                "linear-gradient(90deg, rgba(140,102,241,1) 0%, rgba(168,84,246,1) 60%, rgba(190,72,183,1) 100%)",
              // backgroundColor: "rgb(130, 133, 224)",
              pt: 1.5,
            }}
          >
            <Typography variant="h6" color="common.white" textAlign="center">
              {packages.promotions[packageNumber].name}
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: 217,
            }}
          >
            <Typography variant="h5" color="common.black" textAlign="center">
              <br></br>
              {packages.promotions[packageNumber].detail} ฿
            </Typography>
            <Typography variant="h6" color="common.black" textAlign="center">
              ค่าบริการล่วงหน้า <br></br>
              {packages.promotions[packageNumber].packages.length > 0
                ? packages.promotions[packageNumber].packages[
                    packageDetailNumber
                  ].prepaid
                    .replace("None", "-")
                    .toLocaleString()
                : "-"}{" "}
              ฿
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
            promotions={packages.promotions}
            handleClick={handlePackageSelect}
            packageNumber={packageNumber}
            handlePackageDetailSelect={handlePackageDetailSelect}
          />
          <div style={{display: "flex", width: "1400px"}}>
          <PackageDetailList
            packages={packages.promotions[packageNumber].packages}
            packageNumber={packageNumber}
            packageDetailNumber={packageDetailNumber}
            handlePackageDetailSelect={handlePackageDetailSelect}
          />
          </div>
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Save
          </button>
        </div>
      </PackageModal>

      {/* summery result */}
      <Stack
        spacing={2}
        sx={{
          mt: 2,
        }}
      >
        <Divider>ราคาเริ่มต้น</Divider>
        <Typography variant="h6" color="common.black" textAlign="center">
          {packages.promotions[packageNumber].packages.length > 0
            ? packages.promotions[packageNumber].packages[
                packageDetailNumber
              ].specialprice.toLocaleString()
            : parseFloat(
                packages.promotions[packageNumber].detail.replace(/\D/g, "")
              ).toLocaleString()}{" "}
          ฿
        </Typography>

        <Divider>ค่าบริการล่วงหน้า</Divider>
        <Typography variant="h6" color="common.black" textAlign="center">
          {packages.promotions[packageNumber].packages.length > 0
            ? packages.promotions[packageNumber].packages[
                packageDetailNumber
              ].prepaid.replace("None", "-")
            : "-"}{" "}
          ฿
        </Typography>

        <Divider>จำนวนเดือน</Divider>
        <Typography variant="h6" color="common.black" textAlign="center">
          {packages.promotions[packageNumber].packages.length > 0
            ? packages.promotions[packageNumber].packages[
                packageDetailNumber
              ].package_type.replace(/\D/g, "")
            : "-"}{" "}
          เดือน
        </Typography>

        <Divider>ราคา/เดือน</Divider>
        <Typography variant="h6" color="common.black" textAlign="center">
          {packages.promotions[packageNumber].packages.length > 0
            ? packages.promotions[packageNumber].packages[packageDetailNumber]
                .package
            : "-"}{" "}
          ฿ / เดือน
        </Typography>

        <Divider>
          <Chip
            sx={{
              color: "white",
              fontSize: 16,
              width: 100,
              background:
                "linear-gradient(90deg, rgba(140,102,241,1) 0%, rgba(168,84,246,1) 50%, rgba(170,72,200,1) 100%)",
            }}
            label="ราคาสุทธิ"
          />
        </Divider>
        <Typography variant="h4" color="common.black" textAlign="center">
          {packages.promotions[packageNumber].packages.length > 0
            ? (
                parseFloat(
                  packages.promotions[packageNumber].packages[
                    packageDetailNumber
                  ].specialprice
                    .replace(/\D/g, "")
                    .replace(/,/g, "")
                ) +
                parseFloat(
                  packages.promotions[packageNumber].packages[
                    packageDetailNumber
                  ].prepaid
                    .replace("None", "-")
                    .replace(/,/g, "")
                    .replace(/-/g, "0")
                ) +
                parseFloat(
                  packages.promotions[packageNumber].packages[
                    packageDetailNumber
                  ].package_type
                    .replace(/\D/g, "")
                    .replace(/,/g, "")
                ) *
                  parseFloat(
                    packages.promotions[packageNumber].packages[
                      packageDetailNumber
                    ].package
                      .replace(/\D/g, "")
                      .replace(/,/g, "")
                  )
              ).toLocaleString()
            : parseFloat(
                packages.promotions[packageNumber].detail.replace(/\D/g, "")
              ).toLocaleString()}{" "}
          ฿
        </Typography>
        <hr />
        <hr />
        {/* <a href={link}>
          <Button variant="contained" sx={{ width: "100%" }}>
            ซื้อเลย
          </Button>
        </a> */}
      </Stack>
    </div>
  );
};

export default PackageShow;
function rand() {
  throw new Error("Function not implemented.");
}
