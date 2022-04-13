import { Box, Typography, Grid } from "@mui/material";
import brands from "..";
import { Brand } from "../../../components/Cards";
import { PhoneProps } from "../../../interfaces";

const PhonePage: React.FC<PhoneProps> = ({ phones }) => {
  // const {data} = props;
  // console.log(phones);

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
          เลือกมือถือ
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
          {phones && phones.length > 0 ? (
            phones.map((brand: { id: string; name: string; img: string }) => {
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

//Required for serverside rendering
export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          phoneId: "1",
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
