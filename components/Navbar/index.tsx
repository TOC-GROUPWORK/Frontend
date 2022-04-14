import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material/";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  //Handle Click events
  const clickHandler = () => {
    router.push("/brands");/*ยังไม่มีหน้าเกี่ยวกับ*/
  };

  return (
    <AppBar position="static" style={{background: "#6469E6", height: 80}}>
      <CssBaseline />
      <Toolbar>
        <Typography onClick={clickHandler} style={{flexGrow: "1",cursor: "pointer",fontSize: "31px",marginTop: "15px",paddingLeft: "20px"}}>
          WongNok
        </Typography>
          <div style={{marginLeft: "80px",display: "flex",paddingRight: "20px",marginTop: "15px"}}>
              <Typography onClick={clickHandler} style={{textDecoration: "none", cursor: "pointer", color: "white",fontSize: "31px",marginLeft: "80px", fontFamily: 'Roboto',}}>
                หน้าหลัก
              </Typography>
              <Typography onClick={clickHandler} style={{textDecoration: "none", cursor: "pointer", color: "white",fontSize: "31px",marginLeft: "80px", fontFamily: 'Roboto',}}>
                เกี่ยวกับ
              </Typography>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
