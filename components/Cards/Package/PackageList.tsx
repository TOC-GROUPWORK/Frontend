import Packageitem from "./Packageitem";
import Box from "@mui/material/Box";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

function PackageList(props: { packages: any[]; handleClick: any }) {
  const { packages } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {packages.map((packages, index) => (
        <Packageitem
          key={index}
          index={index}
          PackageName={packages.name}
          PackageDetail={packages.detail}
          handleClick={props.handleClick}
        />
      ))}
    </Box>
  );
}

export default PackageList;
