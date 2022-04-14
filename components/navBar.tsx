import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material/";
import { Link } from "react-router-dom";

const navBar = () => {

  return (
    <AppBar position="static" style={{background: "#6469E6", height: 80}}>
      <CssBaseline />
      <Toolbar>
        <Typography style={{flexGrow: "1",cursor: "pointer",fontSize: "31px",marginTop: "10px",paddingLeft: "20px"}}>
          WongNok
        </Typography>
          <div style={{marginLeft: "80px",display: "flex",paddingRight: "20px",marginTop: "10px"}}>
            <Link to={"/"}>
                <div style={{textDecoration: "none", cursor: "pointer", color: "white",fontSize: "31px",marginLeft: "80px", fontFamily: 'Roboto',}}>
                หน้าหลัก
                </div>
            </Link>
            <Link to={"/"}>
                <div style={{textDecoration: "none", cursor: "pointer", color: "white",fontSize: "31px",marginLeft: "80px", fontFamily: 'Roboto',}}>
                เกี่ยวกับ
                </div>
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default navBar;