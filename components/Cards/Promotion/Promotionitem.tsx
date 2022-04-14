import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

function Promotionitem(props: any) {
  return (
    <Card
      variant="outlined"
      sx={{
        minHeight: 193,
        minWidth: 316,
        backgroundColor: "rgba(197, 198, 228, 0.2)",
        margin: 5,
        borderColor: "grey.500",
        borderRadius: 3,
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            minHeight: 90,
            pt: 1.5,
          }}
        >
          <Typography sx={{ fontSize: 20, pt: 1 }} textAlign="center">
            {props.PromotionName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            minHeight: 100,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              minHeight: 100,
              pl: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: 24, pt: 2 }}>
                {props.PromotionStart}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 32 }}>
                {props.PromotionPrice}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "flex-end",
              borderRadius: "50%",
              borderColor: "error.main",
            }}
          >
            <Typography sx={{ fontSize: 20 }}>ติ๊กถูก</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default Promotionitem;
