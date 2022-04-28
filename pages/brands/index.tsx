import { Box, Grid, Typography } from "@mui/material";
import { Brand } from "../../components/Cards";
import { AppProps } from "next/app";
import { BrandProps, CardProps } from "../../interfaces";
import React, { ChangeEvent, useEffect, useState } from "react";
import SlideBanner from "../../components/SlideBanner";
import SearchBar from "../../components/Searchbar";
import DataService from "../../services/data.services";
import ReactLoading from "react-loading";

const Home: React.FC<BrandProps> = ({ brands }) => {
  const [filter, setFilter] = useState<string>("");
  const [brandsData, setBrandsData] = useState<[]>([]);

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
  //rgba(236,72,153,1)

  // console.log(brands);

  return brands === undefined ? (
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
          เลือกแบรนด์
        </Typography>

        <SearchBar val={filter} func={handleChange} />

        <Grid
          container
          direction="row"
          justifyContent={"center"}
          alignItems={"stretch"}
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
                  key={brand._id}
                // justifyContent="center"
                // alignItems="center"
                >
                  <Brand
                    _id={brand._id}
                    name={brand.name}
                    img={brand.img}
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
  // const { data } = await require("../../mocks/brand/brand_all.json");

  const data = DataService.getBrands().then((res) => {
    return res.data;
  });

  return {
    props: {
      brands: await data,
    },
  };
};

export default Home;
