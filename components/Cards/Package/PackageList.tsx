import Packageitem from "./Packageitem";
import Box from "@mui/material/Box";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

function PackageList(props: {
  packages: any[];
  handleClick: any;
  handlePackageDetailSelect: any;
}) {
  const { packages } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {packages.map((packageDetail, index) => {
        if (index < packages.length - 1) {
          return (
            <Packageitem
              key={index}
              index={index}
              PackageName={packageDetail.name}
              PackageDetail={packageDetail.detail}
              handleClick={props.handleClick}
              handlePackageDetailSelect={props.handlePackageDetailSelect}
            />
          );
        }
      })}
    </Box>
  );
}

export default PackageList;
