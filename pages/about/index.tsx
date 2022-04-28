import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import StudentCard from "../../components/StudentCard";
import { IStudent } from "../../interfaces";

type Props = {};

const objs: IStudent[] = [
  { path: "11", name: "ธีรดนย์ จันทร์หอม", code: "62010436" },
  { path: "2", name: "ธีรัตม์ บุตรากาศ", code: "62010448" },
  { path: "44", name: "ภูดินันท์ เพ็ญสุข", code: "62010710" },
  { path: "55", name: "ภูฟ้า จันทรพัฒน์", code: "62010713" },
  { path: "33", name: "ภูมิพงศ์ บุญดี", code: "62010718" },
  { path: "77", name: "สหทัศน์ ลีวัฒนา", code: "62010922 " },
  { path: "66", name: "สิรวิชญ์ สุขวัฒนาวิทย์", code: "62010948" },
  { path: "88", name: "สุทธิราช ภูโท", code: "62010966" },
];

const index = (props: Props) => {
  return (
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
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        marginX={"auto"}
        paddingY={"2em"}
        paddingX={"1.2rem"}
        width={"70%"}
        minHeight={"100vh"}
        // bgcolor={"white"}
      >
        <Typography color={"white"} textAlign={"center"} variant="h4" paddingY={"0.5rem"} >
          คณะผู้จัดทำ
        </Typography>
        <Grid container marginX={"auto"} width={"100%"} columns={{ xs: 3, sm: 6, md: 12 }}>
          {objs.map((obj, index) => {
            return (
              <Grid key={index} item xs={3} padding={"1.2rem"}>
                <StudentCard obj={obj} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default index;
