import Packageitem from "./Packageitem";
import Box from "@mui/material/Box";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

function PackageList(props: { packages: any[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {props.packages.map((packages) => (
        <Packageitem
          key={packages.id}
          id={packages.id}
          PackageName={packages.PackageName}
          PackageDetail={packages.PackageDetail}
        />
      ))}
    </Box>
  );
}

export default PackageList;
