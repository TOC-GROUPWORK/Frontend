import Packageitem from "./Packageitem";
import Box from "@mui/material/Box";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

function PackageList(props: {
  promotions: any[];
  handleClick: any;
  handlePackageDetailSelect: any;
}) {
  const { promotions } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      {promotions.map((packageDetail, index) => {
        if (index < promotions.length) {
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
