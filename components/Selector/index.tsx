import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

type Props = {
  value: any;
  onChange: any;
};

const index = (props: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        เลือกค่ายบริการมือถือ
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        label="เลือกค่ายบริการมือถือ"
        onChange={props.onChange}
      >
        {/* Still bug */}
        <MenuItem value={1}>TRUE</MenuItem>
        <MenuItem value={2}>AIS</MenuItem>
        <MenuItem value={3}>DTAC</MenuItem>
      </Select>
    </FormControl>
  );
};

export default index;
