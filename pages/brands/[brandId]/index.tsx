import { Box, Typography, Grid } from "@mui/material";
import brands from "..";
import { Phone } from "../../../components/Cards";
import { PhoneProps, CardProps } from "../../../interfaces";
import SearchBar from "../../../components/Searchbar";
import React, { ChangeEvent, useEffect, useState } from "react";
import SlideBanner from "../../../components/SlideBanner";
import { useRouter } from "next/router";

const SLIDE_COUNT = 5; // fix 5 pictures -> can change later or get form api
const slides = Array.from(Array(SLIDE_COUNT).keys());

const PhonePage: React.FC<PhoneProps> = ({ phones }) => {
  // const {data} = props;
  // console.log(phones);
  const router = useRouter();
  const [filter, setFilter] = useState<string>("");

  const filterBrand = (brands: CardProps[], filter: string) => {
    if (!filter) {
      return brands;
    }
    return brands.filter((brand) => {
      const brandName = brand.name.toLowerCase();
      return brandName.includes(filter.toLowerCase());
    });
  };

  const filterPhones = filterBrand(phones, filter);

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setFilter(event.target.value);
  }

  return (
    <Box bgcolor="#9c9edd" sx={{ minHeight: "100vh" }}>
      {/* TODO: Slide Banner */}
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        marginX={"auto"}
        paddingY={"2em"}
        width={"60%"}
      >
        <SlideBanner slides={slides} />
        <Typography variant={"h6"} textAlign={"center"}>
          {router.query.brandId}
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
            filterPhones.map(
              (brand: { id: string; name: string; img: string }) => {
                return (
                  <Grid
                    item
                    xs={4}
                    key={brand.id}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Phone
                      id={brand.id}
                      name={brand.name}
                      img={brand.img}
                      // key={brand.id}
                    />
                  </Grid>
                );
              }
            )
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

  //Mockup
  const { data } = require("../../../mocks/brand/brand_phones.json");

  return {
    props: {
      phones: data,
    },
  };
};

export default PhonePage;
