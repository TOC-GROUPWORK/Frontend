import { Box, Grid, Typography } from "@mui/material";
import { Brand } from "../../components/Cards";
import { AppProps } from "next/app";
import { BrandProps } from "../../interfaces";

const Home: React.FC<BrandProps> = ({ brands }) => {
  // const { data } = brands;
  console.log(brands);
  return (
    <Box bgcolor="#9c9edd">
      {/* TODO: Slide Banner */}
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        marginX={"auto"}
        paddingY={"2em"}
        width={"60%"}
      >
        <Typography variant={"h6"} textAlign={"center"}>
          เลือกแบรนด์
        </Typography>

        {/* TODO: Searchbar */}

        <Grid
          container
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          paddingTop={"3em"}
        >
          {brands && brands.length > 0 ? (
            brands.map((brand: { id: string; name: string; img: string }) => {
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
            <Typography>Failed to load brand properly</Typography>
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
