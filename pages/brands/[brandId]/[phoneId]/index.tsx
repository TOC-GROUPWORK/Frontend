/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Selector from "../../../../components/Selector";
import PackageShow from "../../../../components/Cards/PackageDetail/PackageShow";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import mockData from "../../../../mocks/phone/phone_iphone_13_max.json";

import DataService from "../../../../services/data.services";
import { PhoneDetailProps } from "../../../../interfaces";

import React from "react";
import ReactLoading from "react-loading";

const MOCK_PHONE_DATA = mockData;

// <div>
// <PackageList packages={DUMMY_PACKAGE} />
// </div>
const PhoneDetail = ({ phone }: any) => {
  const router = useRouter();
  const [capacity1, setCapacity1] = useState("page");
  const [capacity2, setCapacity2] = useState("page");
  const [capacity3, setCapacity3] = useState("page");
  const handleCapacity1 = (e: any) => {
    setCapacity1(e.target.value);
  };
  const handleCapacity2 = (e: any) => {
    setCapacity2(e.target.value);
  };
  const handleCapacity3 = (e: any) => {
    setCapacity3(e.target.value);
  };

  const [service1, setService1] = useState("TRUE");
  const [service2, setService2] = useState("TRUE");
  const [service3, setService3] = useState("TRUE");
  const handleService1 = async (e: any) => {
    setService1(e.target.value);
    setCapacity1(Object.keys(phone.detail[service1])[0]);
    // await console.log(Object.keys(phone.detail[service]));
    // await console.log(phone.detail[service]);
  };

  const handleService2 = async (e: any) => {
    setService2(e.target.value);
    setCapacity2(Object.keys(phone.detail[service2])[0]);
  };

  const handleService3 = async (e: any) => {
    setService3(e.target.value);
    setCapacity3(Object.keys(phone.detail[service3])[0]);
  };

  useEffect(() => {
    if (phone !== undefined && phone !== null) {
      setCapacity1(Object.keys(phone.detail[service1])[0]);
      setCapacity2(Object.keys(phone.detail[service2])[0]);
      setCapacity3(Object.keys(phone.detail[service3])[0]);
    }
  }, [phone, service1, service2, service3]);

  // if (phone !== undefined) {
  //   console.log(phone.detail[service][Object.keys(phone.detail[service])[0]]);
  // }

  return phone === undefined ? (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,84,246,1) 50%, rgba(190,72,183,1) 100%)",
        minHeight: "calc(100vh - 74px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading
        type={"spinningBubbles"}
        color={"#FFFFFF"}
        height={"4%"}
        width={"4%"}
      />
    </Box>
  ) : (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,84,246,1) 50%, rgba(190,72,183,1) 100%)",
        minHeight: "100vh",
        py: 3,
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
          borderRadius: "4px",
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
              <Carousel
                autoPlay
                infiniteLoop
                swipeable
                emulateTouch
                showStatus={false}
                showIndicators={false}
              >
                {phone.img.map((src: string, index: number) => {
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
                {phone.name}
              </Typography>
              <div>สี</div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 2,
                  height: 50,
                }}
              >
                {phone.color_style.map((color_code: string, index: number) => {
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
              {Object.keys(phone.detail[service1])[0] !== "page" && (
                <div>
                  {/* <div>ความจุ</div> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 2,
                    }}
                  >
                    {/* <ToggleButtonGroup
                        exclusive
                        value={capacity}
                        aria-label="text alignment"
                        onChange={(e, capacity) => handleCapacity(e, capacity)}
                      >
                        {Object.keys(phone.detail[service1]).map(
                          (key, index) => {
                            return (
                              <ToggleButton
                                key={index}
                                value={key}
                                sx={{ width: 96 }}
                              >
                                {capacity}
                              </ToggleButton>
                            );
                          }
                        )}
                      </ToggleButtonGroup> */}
                  </Box>
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
        {/* Dropdown 3 Columns Grid */}
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Selector
              value={service1}
              onChange={handleService1}
              options={Object.keys(phone.detail)}
              label="เลือกค่ายบริการมือถือ"
            />
            <Box sx={{ mt: 3 }} />
            <Selector
              value={capacity1}
              onChange={handleCapacity1}
              options={Object.keys(phone.detail[service1])}
              label="เลือกความจุ"
            />

            <PackageShow
              packages={
                phone.detail[service1][capacity1] !== undefined
                  ? phone.detail[service1][capacity1]
                  : phone.detail[service1][
                      Object.keys(phone.detail[service1])[0]
                    ]
              }
              link={MOCK_PHONE_DATA.link}
            />
          </Grid>
          <Grid item xs={4}>
            <Selector
              value={service2}
              onChange={handleService2}
              options={Object.keys(phone.detail)}
              label="เลือกค่ายบริการมือถือ"
            />
            <Box sx={{ mt: 3 }} />
            <Selector
              value={capacity2}
              onChange={handleCapacity2}
              options={Object.keys(phone.detail[service2])}
              label="เลือกความจุ"
            />

            <PackageShow
              packages={
                phone.detail[service2][capacity2] !== undefined
                  ? phone.detail[service2][capacity2]
                  : phone.detail[service2][
                      Object.keys(phone.detail[service2])[0]
                    ]
              }
              link={MOCK_PHONE_DATA.link}
            />
          </Grid>
          <Grid item xs={4}>
            <Selector
              value={service3}
              onChange={handleService3}
              options={Object.keys(phone.detail)}
              label="เลือกค่ายบริการมือถือ"
            />
            <Box sx={{ mt: 3 }} />
            <Selector
              value={capacity3}
              onChange={handleCapacity3}
              options={Object.keys(phone.detail[service3])}
              label="เลือกความจุ"
            />

            <PackageShow
              packages={
                phone.detail[service3][capacity3] !== undefined
                  ? phone.detail[service3][capacity3]
                  : phone.detail[service3][
                      Object.keys(phone.detail[service3])[0]
                    ]
              }
              link={MOCK_PHONE_DATA.link}
            />
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
  const data = DataService.getPhoneById(phoneId).then((res) => {
    return res.data;
  });

  //Mockup
  // const { data } = require("../../../../mocks/brand/brand_by_id.json");

  return {
    props: {
      phone: await data,
    },
  };
};

export default PhoneDetail;
