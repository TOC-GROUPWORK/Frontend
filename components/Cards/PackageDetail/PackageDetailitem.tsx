import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function PackageDetailItem(props: any) {
  const [select, setSelect] = React.useState(false);
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 400,
        minWidth: 300,
        backgroundColor: "rgba(197, 198, 228, 0.2)",
        margin: 5,
        borderColor: "grey.500",
        borderRadius: 3,
      }}
      onClick={() => {
        props.handlePackageDetailSelect(props.index);
        setSelect(!select);
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            minHeight: 96,
            // backgroundColor: "rgb(130, 133, 224)",
            // backgroundColor: "secondary.dark",
            background:
              "linear-gradient(90deg, rgba(140,102,241,1) 0%, rgba(168,84,246,1) 50%, rgba(170,72,200,1) 100%)",
            pt: 1.5,
          }}
        >
          <Typography
            sx={{ fontSize: 40, pt: 1 }}
            color="common.white"
            textAlign="center"
          >
            {props.PackagePrice} ฿
          </Typography>
        </Box>
        <Box sx={{ minHeight: 50, maxWidth: 456, pt: 1 }}>
          <Typography sx={{ fontSize: 20 }} color="black" textAlign="center">
            ค่าบริการล่วงหน้า {props.PackageDetail.replace("None", "-")} ฿
          </Typography>
        </Box>
        <Box sx={{ minHeight: 50 }}>
          <Typography
            sx={{ fontSize: 20, pt: 1 }}
            color="black"
            textAlign="center"
          >
            ระยะเวลาสัญญา {props.PackageContract} เดือน
          </Typography>
        </Box>
        <Box sx={{ minHeight: 50 }}>
          <Typography
            sx={{ fontSize: 20, pt: 1 }}
            color="black"
            textAlign="center"
          >
            ค่าบริการ {props.Package} ฿ / เดือน
          </Typography>
        </Box>
        {props.packageDetailNumber == props.index ? (
          <Box
            sx={{ minHeight: 40 }}
            display="flex"
            justifyContent="flex-end"
            marginRight="10px"
          >
            <CheckCircleIcon />
          </Box>
        ) : (
          <Box
            sx={{ minHeight: 40 }}
            display="flex"
            justifyContent="flex-end"
            marginRight="10px"
          >
            <CheckCircleOutlineIcon />
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}

export default PackageDetailItem;
