import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

function PackageDetailitem(props: any) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 250,
        minWidth: 456,
        backgroundColor: "rgba(197, 198, 228, 0.2)",
        margin: 5,
        borderColor: "grey.500",
        borderRadius: 3,
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            minHeight: 96,
            backgroundColor: "rgb(130, 133, 224)",
            pt: 1.5,
          }}
        >
          <Typography
            sx={{ fontSize: 40, pt: 1 }}
            color="common.white"
            textAlign="center"
          >
            {props.PackagePrice}
          </Typography>
        </Box>
        <Box sx={{ minHeight: 54, maxWidth: 456, pt: 1 }}>
          <Typography sx={{ fontSize: 20 }} color="black" textAlign="center">
            {props.PackageDetail}
          </Typography>
        </Box>
        <Box sx={{ minHeight: 60 }}>
          <Typography
            sx={{ fontSize: 20, pt: 1 }}
            color="black"
            textAlign="center"
          >
            {props.PackageContract}
          </Typography>
        </Box>
        <Box sx={{ minHeight: 40 }}>
          <Typography
            sx={{ fontSize: 20, pt: 1 }}
            color="black"
            textAlign="right"
          >
            ติ๊กถูก
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default PackageDetailitem;
