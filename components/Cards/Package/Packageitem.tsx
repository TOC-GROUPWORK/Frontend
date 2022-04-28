import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Packageitem(props: any) {
  const { index, PackageName, PackageDetail } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 200,
        minWidth: 300,
        backgroundColor: "rgba(197, 198, 228, 0.2)",
        margin: 5,
        borderColor: "grey.500",
        borderRadius: 3,
      }}
      onClick={() => {
        props.handleClick(index);
        props.handlePackageDetailSelect(0);
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            minHeight: 55,
            // backgroundColor: "secondary.dark",
            background:
              "linear-gradient(90deg, rgba(140,102,241,1) 0%, rgba(168,84,246,1) 50%, rgba(170,72,200,1) 100%)",
            // backgroundColor: "rgb(130, 133, 224)",
            pt: 1.5,
          }}
        >
          <Typography
            sx={{ fontSize: 20 }}
            color="common.white"
            textAlign="center"
          >
            {PackageName}
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: 217,
          }}
        >
          <Typography sx={{ fontSize: 18, p: 4 }} color="black">
            {PackageDetail}
          </Typography>
          {props.packageNumber == props.index ? (
            <Box
              sx={{ minHeight: 40 }}
              display="flex"
              justifyContent="flex-end"
              marginRight="10px"
              alignItems="flex-end"
            >
              <CheckCircleIcon />
            </Box>
          ) : (
            <Box
              sx={{ minHeight: 40 }}
              display="flex"
              justifyContent="flex-end"
              marginRight="10px"
              alignItems="flex-end"
            >
              <CheckCircleOutlineIcon />
            </Box>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default Packageitem;
