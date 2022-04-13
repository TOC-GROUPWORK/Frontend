import { Box, Grid, Typography } from "@mui/material";
import { Brand } from "../../components/Cards";
import { AppProps } from "next/app";
import { BrandProps, CardProps } from "../../interfaces";
import React, { ChangeEvent, useEffect, useState } from "react";
import SlideBanner from "../../components/SlideBanner";
import SearchBar from "../../components/Searchbar";

const SLIDE_COUNT = 5; // fix 5 pictures -> can change later or get form api
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Home: React.FC<BrandProps> = ({ brands }) => {
  // const { data } = brands;
  // console.log(brands);
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

  const filterBrands = filterBrand(brands, filter);

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setFilter(event.target.value);
  }

  // useEffect(()=>{
  //     console.log(filter);
  // },[filter])

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
          เลือกแบรนด์
        </Typography>

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
          {filterBrands && filterBrands.length > 0 ? (
            filterBrands.map((brand: CardProps) => {
              return (
                <Grid
                  item
                  xs={4}
                  key={brand.id}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Brand
                    id={brand.id}
                    name={brand.name}
                    img={brand.img}
                    // key={brand.id}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography>No brands found</Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

//Fetching Data on Server side
export const getStaticProps = async () => {
  const { data } = await require("../../mocks/brand/brand_all.json");
  return {
    props: {
      brands: data,
    },
  };
};

export default Home;
