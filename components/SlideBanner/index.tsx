/* eslint-disable @next/next/no-img-element */
import { Typography, Button } from "@mui/material/";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import mockData from "../../mocks/sildeBanner/sildeBanner.json";

type Props = {};

const MOCKDATA = mockData;

const SlideBanner = (props: Props) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      swipeable
      emulateTouch
      showThumbs={false}
      showStatus={false}
    >
      {MOCKDATA.map((phone, index) => {
        return (
          <div key={index} style={{ width: "100vw", height: "calc(50vh)" }}>
            <Typography
              variant={"h2"}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textShadow: "1px 1px 50px #0004",
              }}
            >
              {phone.model}
            </Typography>
            <Button
              style={{
                position: "absolute",
                top: "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textShadow: "1px 1px 50px #0004",
                backgroundColor: "#9559F4",
                padding: "7px 32px",
              }}
              variant="contained"
              size="large"
              color="inherit"
            >
              <Typography variant={"h6"}>เทียบเลย</Typography>
            </Button>
            <img src={phone.pictures} alt={phone.pictures} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default SlideBanner;
