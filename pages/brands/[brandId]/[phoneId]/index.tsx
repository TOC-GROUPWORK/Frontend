/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Selector from "../../../../components/Selector";
import PackageList from "../../../../components/Cards/Package/PackageList";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import mockData from "../../../../mocks/phone/phone_iphone_13_max.json";

const DUMMY_PACKAGE = [
  {
    id: "p1",
    PackageName: "ลูกค้าเก่ารายเดือน",
    PackageDetail: "อัพเกรดแพ็กเกจใหม่ จ่ายเท่าเดิม 1099.-",
  },
  {
    id: "p2",
    PackageName: "ลูกค้าใหม่",
    PackageDetail: "ย้ายค่ายเบอร์เดิมพร้อมสมัครแพ็คเกจ 1399.- ขึ้นไป",
  },
];

const MOCK_PHONE_DATA = mockData;

// <div>
// <PackageList packages={DUMMY_PACKAGE} />
// </div>
const PhoneDetail = () => {
  const router = useRouter();
  const [capacity, setCapacity] = useState("1");
  const handleCapacity = (event: any, newCapacity: any) => {
    setCapacity(newCapacity);
  };

  const [service, setService] = useState("1");
  const handleService = (event: any, newService: any) => {
    setService(newService);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,84,246,1) 50%, rgba(190,72,183,1) 100%)",
        minHeight: "100vh", py:3
      }}
    >
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        marginX={"auto"}
        paddingY={"2em"}
        paddingX={"2em"}
        width={"60%"}
        bgcolor="#FFFFFF"
        sx={{
          borderRadius: '4px'
        }}

      >
        <Box sx={{ my: 1 }}>
          <Typography variant={"h4"} textAlign={"center"}>
            Promotion ทุกเครือข่าย
          </Typography>
          <Typography variant={"h5"} textAlign={"center"}>
            เปรียบเทียบราคาโปรโมชันในค่ายเดียวกันหรือค่ายอื่น
          </Typography>
        </Box>

        {/* Grid 2 columns */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* left column */}
          <Grid item xs={6}>
            <Box sx={{ px: 10 }}>
              <Carousel autoPlay infiniteLoop swipeable emulateTouch>
                {MOCK_PHONE_DATA.pictures.map((src, index) => {
                  return (
                    <div key={index}>
                      <img src={src} alt={src} />
                    </div>
                  );
                })}
              </Carousel>
            </Box>
          </Grid>
          {/* right column */}
          <Grid item xs={6}>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}
            >
              <Typography variant={"h5"} textAlign={"start"}>
                {MOCK_PHONE_DATA.model}
              </Typography>
              <div>เลือกสี</div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 2,
                  height: 50,
                }}
              >
                {MOCK_PHONE_DATA.color_style.map((color_code, index) => {
                  return (
                    <CircleIcon
                      key={index}
                      sx={{
                        color: `rgb(${color_code[0]}, ${color_code[1]}, ${color_code[2]})`,
                        width: 48,
                        height: 48,
                      }}
                    />
                  );
                })}
              </Box>
              <div>ความจุ</div>
              <Box sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}>
                <ToggleButtonGroup
                  exclusive
                  value={capacity}
                  aria-label="text alignment"
                  onChange={handleCapacity}
                >
                  {MOCK_PHONE_DATA.rams.map((capacity, index) => {
                    return (
                      <ToggleButton
                        key={index}
                        value={capacity}
                        sx={{ width: 96 }}
                      >
                        {capacity}
                      </ToggleButton>
                    );
                  })}
                </ToggleButtonGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Dropdown 3 Columns Grid */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            {/* Still bug */}
            <Selector value={service} onChange={handleService} />
          </Grid>
          <Grid item xs={4}>
            <Selector value={service} onChange={handleService} />
          </Grid>
          <Grid item xs={4}>
            <Selector value={service} onChange={handleService} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

//Required for serverside rendering
export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          brandId: "apple",
          phoneId: "1001",
        },
      },
    ],
  };
};

export const getStaticProps = async (context: any) => {
  const phoneId = context.params.phoneId;

  //Fetch Data HERE

  //Mockup
  const { data } = require("../../../../mocks/brand/brand_by_id.json");

  return {
    props: {
      phone: data,
    },
  };
};

export default PhoneDetail;
