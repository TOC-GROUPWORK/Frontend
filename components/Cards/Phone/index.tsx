import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardProps } from "../../../interfaces";
import React from "react";
import { useRouter } from "next/router";

const Phone: React.FC<CardProps> = ({ _id, img, name }) => {
  const router = useRouter();

  //Handle Click events
  const clickHandler = () => {
    router.push("/brands/" + router.query.brandId + "/" + _id);
  };

  return (
    <Card
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
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
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Phone;
