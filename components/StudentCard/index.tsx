import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";
import React from "react";

import { IStudent } from "../../interfaces";

type Props = {
  obj: IStudent;
};

const index = ({ obj }: Props) => {
  const studentSrc = "/students/" + obj.path + ".JPG";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{height: 320}} component="img" image={studentSrc} alt="green iguana" />
      <CardContent>
        <Typography
          textAlign={"center"}
          gutterBottom
          variant="h6"
          component="div"
        >
          {obj.name}
        </Typography>
        <Typography textAlign={"center"} variant="body2" color="text.secondary">
          {obj.code}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button sx={{mx:"auto"}} size="small">GitHub: xxxxx</Button>
      </CardActions> */}
    </Card>
  );
};

export default index;
