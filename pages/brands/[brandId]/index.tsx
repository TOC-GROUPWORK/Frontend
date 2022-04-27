import { Box, Typography, Grid } from "@mui/material";
import brands from "..";
import { Phone } from "../../../components/Cards";
import { PhonesProps, PhoneProp, CardProps } from "../../../interfaces";
import SearchBar from "../../../components/Searchbar";
import React, { ChangeEvent, useEffect, useState } from "react";
import SlideBanner from "../../../components/SlideBanner";
import { useRouter } from "next/router";
import DataService from "../../../services/data.services";

import ReactLoading from "react-loading";

const PhonePage = ({ phones }: PhonesProps) => {
  useEffect(() => {
    window.scrollTo(0, 450);
  });

  const router = useRouter();
  const [filter, setFilter] = useState<string>("");

  const filterBrand = (phones: PhoneProp[], filter: string) => {
    if (!filter) {
      return phones;
    }
    return phones.filter((phone) => {
      const phoneName = phone.name.toLowerCase();
      return phoneName.includes(filter.toLowerCase());
    });
  };

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setFilter(event.target.value);
  }

  let filterPhones: PhoneProp[] | undefined = undefined;

  if (phones !== undefined) {
    filterPhones = filterBrand(phones.models_list, filter);
  }

  return phones === undefined ? (
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
      }}
    >
      {/* TODO: Slide Banner */}
      <Box width={"100%"} alignItems={"center"} marginX={"auto"}>
        <SlideBanner />
      </Box>

      <Box
        alignItems={"center"}
        justifyContent={"center"}
        marginX={"auto"}
        paddingY={"2em"}
        width={"60%"}
        minHeight={"100vh"}
      >
        <Typography
          variant={"h4"}
          textAlign={"center"}
          color="white"
          sx={{ my: 4 }}
        >
          {phones.name}
        </Typography>

        {/* TODO: Searchbar */}
        <SearchBar val={filter} func={handleChange} />

        <Grid
          container
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          paddingTop={"3em"}
        >
          {filterPhones && filterPhones.length > 0 ? (
            filterPhones.map((phone: PhoneProp) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={phone._id}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Phone
                    _id={phone._id}
                    name={phone.name}
                    img={phone.img[0]}
                    key={phone._id}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography>Failed to load phone properly</Typography>
          )}
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
          brandId: "Apple",
        },
      },
    ],
  };
};

export const getStaticProps = async (context: any) => {
  const brandId = context.params.brandId;

  //Fetch Data HERE
  const data = DataService.getBrandById(brandId).then((res) => {
    return res.data;
  });

  //Mockup
  // const { data } = require("../../../mocks/brand/brand_phones.json");

  return {
    props: {
      phones: await data,
    },
  };
};

export default PhonePage;
