import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, Box } from "@mui/material/";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

type Props = {};

const index = (props: Props) => {
  return (
    <AppBar
      position="relative"
      sx={{ pt: 5 }}
      style={{
        background: "linear-gradient(90deg, #6566F1 0%, #855DF4 70%)",
        height: "300px",
      }}
    >
      <CssBaseline />
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Box sx={{ cursor: "pointer", marginTop: "32px", paddingLeft: "20px" }}>
          {/* <Image src={logo} alt="logo_wn" width="56" height="56" /> */}
        </Box>
        <Typography
          variant={"h6"}
          style={{
            flexGrow: "1",
            marginTop: "10px",
            paddingLeft: "16px",
          }}
        >
          WEBSITE
          <br />
          <Typography sx={{ mt: 2 }}>
            Web Scraping Project with Regular expression using Python{" "}
          </Typography>
        </Typography>
        <div
          style={{
            marginLeft: "80px",
            display: "flex",
            paddingRight: "20px",
            marginTop: "10px",
          }}
        >
          <Typography
            variant={"h6"}
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "200px",
            }}
          >
            INFORMATION
            <br />
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                cursor: "pointer",
              }}
            >
              <Box sx={{ mt: 1 }}>
                <Link href="https://www.true.th/truemoveh/site/device" passHref>
                  <a target="_blank">TRUE</a>
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link href="https://www.hotdeal.ais.co.th" passHref>
                  <a target="_blank">AIS</a>
                </Link>
              </Box>
              <Box sx={{ mt: 1 }}>
                <Link href="https://www.dtac.co.th/home.html" passHref>
                  <a target="_blank">DTAC</a>
                </Link>
              </Box>
            </Typography>
          </Typography>
          <Typography
            variant={"h6"}
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "40px",
            }}
          >
            CONTACT
            <Typography
              sx={{
                mt: 2,
              }}
            >
              <Link href="https://github.com/TOC-GROUPWORK" passHref>
                <a target="_blank">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <GitHubIcon sx={{ mr: 1 }} />
                    Github TOC-GROUPWORK
                  </Box>
                </a>
              </Link>
            </Typography>
          </Typography>
        </div>
      </Toolbar>

      {/* bottom copyright */}
      <Box
        bgcolor="#00000040"
        position="absolute"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          bottom: 0,
          py: 1.5,
        }}
      >
        Copyright <CopyrightIcon sx={{ fontSize: 16 }} /> 2022 Theory of
        Computation 01076013 , Computer Engineering, KMITL
      </Box>
    </AppBar>
  );
};

export default index;
