import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Box,
} from "@mui/material/";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";
import logo from "../../assets/logo_wn.png"
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();

  //Handle Click events
  const clickHandler = () => {
    router.push("/brands");/*ยังไม่มีหน้าเกี่ยวกับ*/
  };

  return (
    <AppBar position="static" style={{
      background: "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,84,246,1) 70%)"}} >
      <CssBaseline />
      <Toolbar sx={{boxShadow: 5, zIndex: 2000}} >
        <Box sx={{cursor: "pointer",marginTop: "12px",paddingLeft: "20px"}}>
          <Image src={logo} alt="logo_wn" width="56" height="56" / >
        </Box>
        <Typography variant={"h5"} onClick={clickHandler} style={{flexGrow: "1",cursor: "pointer",marginTop: "10px",paddingLeft: "16px"}}>
        WongNok
        </Typography>
          <div style={{marginLeft: "80px",display: "flex",paddingRight: "20px",marginTop: "10px"}}>
              <Typography variant={"h5"} onClick={clickHandler} style={{textDecoration: "none", cursor: "pointer", color: "white",marginLeft: "80px", fontFamily: 'Roboto',}}>
                หน้าหลัก
              </Typography>
              <Typography variant={"h5"} onClick={clickHandler} style={{textDecoration: "none", cursor: "pointer", color: "white",marginLeft: "80px", fontFamily: 'Roboto',}}>
                เกี่ยวกับ
              </Typography>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
