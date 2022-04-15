import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

function Packageitem(props: any) {
  const { index, PackageName, PackageDetail } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 272,
        maxWidth: 237,
        backgroundColor: "common.white",
        margin: 5,
        borderColor: "grey.500",
        borderRadius: 3,
      }}
      onClick={() => props.handleClick(index)}
    >
      <CardActionArea>
        <Box
          sx={{
            minHeight: 55,
            backgroundColor: "rgb(130, 133, 224)",
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
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default Packageitem;
