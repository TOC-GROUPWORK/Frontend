import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PackageDetailList from "../Cards/PackageDetail/PackageDetailList";
import PackageDetailitem from "../Cards/PackageDetail/PackageDetailitem";
import React from "react";

type Props = {
  value: any;
  onChange: any;
};

const index = (props: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="selectService">เลือกค่ายบริการมือถือ</InputLabel>
      <Select
        labelId="selectService"
        id="selectServiceId"
        value={props.value}
        label="เลือกค่ายบริการมือถือ"
        onChange={props.onChange}
      >
        {/* Still bug */}
        <MenuItem value={"TRUE"}>TRUE</MenuItem>
        <MenuItem value={"AIS"}>AIS</MenuItem>
        <MenuItem value={"DTAC"}>DTAC</MenuItem>
      </Select>
    </FormControl>
  );
};

export default index;
