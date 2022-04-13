import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardProps } from "../../../interfaces";
import React from "react";
import { useRouter } from "next/router";

const Phone: React.FC<CardProps> = ({ id, img, name }) => {
  const router = useRouter();

  //Handle Click events
  const clickHandler = () => {
    router.push("/brands/" + router.query.brandId + "/" + id);
  };

  return (
    <Card
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={clickHandler}
    >
      <CardMedia
        component={"img"}
        image={img}
        alt={name}
        width={"200px"}
        height={"200px"}
        sx={{
          objectFit: "contain",
          "&:hover": { cursor: "pointer" },
        }}
      />
      <CardContent>
        <Typography variant="h5" textAlign={"center"}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Phone;
