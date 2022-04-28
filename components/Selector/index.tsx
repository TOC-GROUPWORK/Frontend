import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PackageDetailList from "../Cards/PackageDetail/PackageDetailList";
import PackageDetailitem from "../Cards/PackageDetail/PackageDetailitem";
import React from "react";

type Props = {
  value: any;
  onChange: any;
  options: string[];
  label?: string;
};

const index = ({ value, onChange, options, label }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="selectService">{label}</InputLabel>

      {value === "page" ? (
        <Select
          labelId="selectService"
          id="selectServiceId"
          value={value}
          label={label}
          onChange={(e) => onChange(e)}
        >
          <MenuItem value={"page"}>ไม่พบข้อมูล</MenuItem>
        </Select>
      ) : (
        <Select
          labelId="selectService"
          id="selectServiceId"
          value={value}
          label={label}
          onChange={(e) => onChange(e)}
        >
          {options.map((option: string, index: number) => {
            return (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </FormControl>
  );
};

export default index;
