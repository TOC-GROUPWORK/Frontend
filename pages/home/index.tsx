import { Box, Grid, Typography } from "@mui/material"

import SlideBanner from "../../components/SlideBanner"
import React, { ChangeEvent, useEffect, useState } from "react";
import { Brand, CardProps } from "../../components/Cards";
import SearchBar from "../../components/Searchbar";

const Home = () => {

    const { data } = require('/mocks/brand/brand_all.json');
    const [filter, setFilter] = useState<string>('');

    const filterBrand = (data:CardProps[], filter:string) => {
        if(!filter){
            return data;
        }
        return data.filter((brand) => {
            const brandName = brand.name.toLowerCase();
            return brandName.includes(filter.toLowerCase());
        })
    }

    const filterBrands = filterBrand(data,filter);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
        setFilter(event.target.value);
    };

    // useEffect(()=>{
    //     console.log(filter);
    // },[filter])

    return (
        <Box
            bgcolor="#9c9edd"
        >
            {/* TODO: Slide Banner */}
            <Box
                alignItems={"center"}
                justifyContent={"center"}
                marginX={'auto'}
                paddingY={'2em'}
                width={'60%'}
            >
                <SlideBanner/>
                <Typography
                    variant={"h6"}
                    textAlign={"center"}
                >
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
                    paddingTop={'3em'}
                >
                    { filterBrands && filterBrands.length > 0 ? (
                        filterBrands.map((brand: { id: string; name: string; img: string; }) => {
                            return(
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
                                )
                        })
                        ):(
                            <Typography>No brands found</Typography>
                    )}
                </Grid>
            </Box>
        </Box>
    )
}

export default Home;